<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2020/1/3
  Time: 9:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>员工管理</title>
    <%@include file="/static/common/common-header.jsp"%>
    <script type="text/javascript" src="/static/js/views/employee.js"></script>
</head>
<body>

    <%--员工列表增删改查等按钮--%>
    <div id="employeeDatagridToolbar">
        <a href="javascript:void(0);" data-method="add" class="easyui-linkbutton" data-options="iconCls:'icon-add',plain:true">添加</a>
        <a href="javascript:void(0);" data-method="edit" class="easyui-linkbutton" data-options="iconCls:'icon-edit',plain:true">修改</a>
        <a href="javascript:void(0);" data-method="remove" class="easyui-linkbutton" data-options="iconCls:'icon-remove',plain:true">删除</a>
        <a href="javascript:void(0);" data-method="reload" class="easyui-linkbutton" data-options="iconCls:'icon-reload',plain:true">刷新</a>
        <input class="easyui-textbox" id="keyWord" name="keyWord" data-options="iconCls:'icon-search'" style="width:200px">
        <a href="javascript:void(0);" data-method="search" class="easyui-linkbutton" data-options="iconCls:'icon-search',plain:true">查询</a>
    </div>

    <%--添加/修改的弹出框--%>
    <div id="employeeDialog" class="easyui-dialog" data-options="width:300,height:310">
        <form id="employeeDialogForm" method="post">
            <input type="hidden" name="id">
            <div>
                <td>用户名:</td>
                <input class="easyui-textbox" name="username" />
            </div>
            <div>
                <td>密&emsp;码:</td>
                <input class="easyui-textbox" name="password" />
            </div>
            <div>
                <td>姓&emsp;名:</td>
                <input class="easyui-textbox" name="realName" />
            </div>
            <div>
                <td>邮&emsp;箱:</td>
                <input class="easyui-textbox" name="email" />
            </div>
            <div>
                <td>电&emsp;话:</td>
                <input class="easyui-textbox" name="tel" />
            </div>
            <div>
                <td>状&emsp;态:</td>
                <select class="easyui-combobox" name="status" style="width:140px;" panelHeight="80px">
                    <option value="0">正常</option>
                    <option value="1">禁用</option>
                </select>
            </div>
        </form>
    </div>

    <%--弹出框按钮--%>
    <div id="employeeDialogButtons">
        <a href="javascript:void(0);" data-method="save" class="easyui-linkbutton" data-options="iconCls:'icon-save'">保存</a>
        <a href="javascript:void(0);" data-method="cancel" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">关闭</a>
    </div>


    <%--员共列表--%>
    <table id="employeeDatagrid"></table>

</body>
</html>
