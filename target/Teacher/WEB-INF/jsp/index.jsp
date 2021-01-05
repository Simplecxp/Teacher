<%@ page isELIgnored="false" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<html>
<head>
    <title>Title</title>
</head>
<body>

<table>
    <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>省份证</th>
        <th>生日</th>
        <th>账号</th>
        <th>密码</th>
        <th>性别</th>
        <th>操作</th>
        <td>
            <a href="add">添加</a>
        </td>
    </tr>

    <tbody id="mypageshow"></tbody>

</table>
</body>
<script src="${pageContext.request.contextPath}/static/js/jquery-1.12.4.min.js"></script>
<script src="${pageContext.request.contextPath}/static/js/index.js"></script>
</html>

