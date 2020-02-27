$(function () {

    //获取标签
    var employeeDatagrid = $("#employeeDatagrid");
    var employeeDialog = $("#employeeDialog");
    var employeeDialogForm = $("#employeeDialogForm");
    var keyWordInput = $("#keyWord");

    //弹出窗口的渲染
    employeeDialog.dialog({
        width: 250,
        height: 300,
        closed: true,
        modal: true,
        buttons:'#employeeDialogButtons'
    });

    //获取有data-method属性的a标签绑定点击事件
    $("[data-method]").on("click",function () {
       var method = $(this).data("method");
       cduestc[method]();
    });

    cduestc = {
        //添加
        add:function(){
            //清除form表单中数据
            employeeDialogForm.form("clear");
            employeeDialog.dialog("open").dialog("center").dialog("setTitle","添加");
        },
        //修改
        edit:function () {
            var row = employeeDatagrid.datagrid("getSelected");
            if(row){
                //数据回显
                employeeDialogForm.form('load',row);
                //弹出弹框
                employeeDialog.dialog("open").dialog("center").dialog("setTitle","修改");
            }else{
                $.messager.alert("警告","<span style='font-size: 20px;color: red'>煞笔，选中啊</span>","error");
            }
        },
        //删除
        remove:function () {
            var row = employeeDatagrid.datagrid("getSelected");
            console.debug(row);
            if(row){
                var employeeId = row.id;
                //提交数据进行删除
                $.post("/employee/delete",{id:employeeId},function (data) {
                    if(data.success){
                        $.messager.alert("提示","<span style='font-size: 20px;color: green'>删除成功</span>","info");
                        cduestc.reload();
                    }else{
                        $.messager.alert("警告","<span style='font-size: 20px;color: red'>删除失败！！！</span>","error");
                    }
                })
            }else{
                $.messager.alert("警告","<span style='font-size: 20px;color: red'>煞笔，选中啊</span>","error");
            }

        },
        //刷新
        reload:function () {
            employeeDatagrid.datagrid("reload");
        },
        //弹出框保存按钮
        save:function () {
            //提交表单
            employeeDialogForm.form("submit",{
                url:'/employee/saveOrUpdate',
                onSubmit: function(){
                    //验证输入的信息
                    return true;
                },
                success:function(data){
                    data = $.parseJSON(data);
                    if(data.success){
                        $.messager.alert("提示","添加成功","info");
                        //保存成功之后，关闭弹出框，属性列表
                        cduestc.cancel();
                        cduestc.reload();
                    }else {
                        $.messager.alert("错误",data.msg,"error");
                        cduestc.cancel();
                    }
                }
            });
        },
        //弹出框取消按钮
        cancel:function () {
            //关闭弹出框
            employeeDialog.dialog("close");
        },
        //高级查询
        search:function () {
            var keyWord = keyWordInput.val();
            employeeDatagrid.datagrid("load",{"keyWord":keyWord});
        }
    };


    //员工列表
    employeeDatagrid.datagrid({
        url:'/employee/list',
        fit:true,
        fitColumns:true,
        striped:true,
        rownumbers:true,
        singleSelect:true,
        pagination:true,
        toolbar:'#employeeDatagridToolbar',
        columns:[[
            {field:'username',title:'用户名',align:'center',width:100},
            {field:'realName',title:'姓名',align:'center',width:100},
            {field:'email',title:'邮箱',align:'center',width:100},
            {field:'status',title:'状态',align:'center',width:100},
            {field:'tel',title:'电话',align:'center',width:100}
        ]]
    });

});
