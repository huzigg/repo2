$(function () {

    //wc公共的组件抽取
    var departmentGrid = $('#departmentGrid');
    var departmentDialog = $('#departmentDialog');
    var departmentForm = $('#departmentForm');

    //事情注册
  $("*[data-method]").on("click",function () {
        var methodName = $(this).data("method");
        itsource[methodName]();
    })

    itsource = {
        add(){
            //居中并且打开
            departmentDialog.dialog("center").dialog("open");
            //保存每次打开，数据都是空的
            departmentForm.form("clear");
        },
        update(){
            //判断是否选中一行
            var row = departmentGrid.datagrid("getSelected");
            if(!row){
                $.messager.alert('提示',"请选中后再进行操作!","info");
                return ;
            }
            //居中并且打开
            departmentDialog.dialog("center").dialog("open");
            //保存每次打开，数据都是空的
            departmentForm.form("clear");
            //进行回显
            departmentForm.form("load",row);
        },
        save(){
            //提交表单
            departmentForm.form('submit', {
                url:"department/save",
                onSubmit: function(){
                    return  $(this).form('validate');
                },
                success:function(data){
                    //把它转成json
                    var result = JSON.parse(data);
                    if(result.success){
                        itsource.refresh();
                        itsource.close();
                    }else{
                        $.messager.alert('操作失败',result.msg,"error");
                    }
                }
            });
        },
        delete(){
            //选中一行才可以删除
            var row = departmentGrid.datagrid("getSelected");
            if(!row){
                $.messager.alert('提示',"请选中后再进行操作!","info");
                return ;
            }
            //问:是否真的要删除？
            $.messager.confirm('确认','您确认想要删除记录吗？',function(r){
                if (r){
                   $.get("department/delete",{id:row.id},function (result) {
                       if(result.success){
                           itsource.refresh();
                       }else{
                           $.messager.alert('操作失败',result.msg,"error");
                       }
                   })
                }
            });


        },
        refresh(){
            //刷新一次
            departmentGrid.datagrid("reload");
        },
        close(){
            departmentDialog.dialog("close");
        }
    };

  //通过js创建咱们的grid
    departmentGrid.datagrid({
        fit:true,
        fitColumns:true,
        singleSelect:true,
        url:'department/page',
        toolbar:"#toolbar",
        pageList:[5,10,20,30,40,100],
        pagination:true,
        columns:[[
            {field:'sn',title:'编码',width:100},
            {field:'name',title:'名称',width:100},
            {field:'dirpath',title:'路径',width:100,align:'right'},
            {field:'state',title:'状态',width:100,align:'right'}
        ]]
    });

    //通过js创建咱们的弹出框
    departmentDialog.dialog({
        title: '编辑数据',
        // width: 400,
        // height: 200,
        closed: true, //默认关闭
        modal: true,
        buttons:"#departmentDialogButtons"
    });



})