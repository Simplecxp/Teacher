<%--
  Created by IntelliJ IDEA.
  User: CXP
  Date: 2020/12/25
  Time: 9:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form method="post" action="addtea">
    <table align="center" border="1">
        <tr>
            <td>姓名</td>
            <td> <input type="text" name="t_name" id="t_name"></td>
        </tr>
        <tr>
            <td>省份证</td>
            <td>  <input type="text" name="t_idcard" id="t_idcard"></td>
        </tr>
        <tr>
            <td>账号</td>
            <td> <input type="text" name="t_loginName" id="t_loginName"></td>
        </tr>
        <tr>
            <td>密码</td>
            <td> <input type="text" name="t_pwd" id="t_pwd"></td>
        </tr>
        <tr>
            <td>性别</td>
            <td id="sex">
                <input type="radio" name="t_sex" value="1">男
                <input type="radio" name="t_sex" value="2">女
            </td>
        </tr>

        <tr align="center">
            <td colspan="5"><input type="submit" value="上传"></td>
        </tr>
    </table>
</form>
</body>

</html>
