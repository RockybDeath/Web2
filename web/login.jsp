<%--
  Created by IntelliJ IDEA.
  User: Киря
  Date: 19.11.2019
  Time: 9:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Секретная регистрация</title>
    <script type="text/javascript" src="myEnemy.js"></script>
    <link href="anime.css" rel="stylesheet" type="text/css">
</head>
<body id="hardBody" onload="check()">
    <h1 style="text-align: center" id="permission">Нада регистрироваться</h1><br>
    <div class="pricol">
    <input autocomplete="off" id="Nickname" type="text" placeholder="Give me your name">
    <input type="button" value="Who are you..." onclick="whoAreYou()"><br>
    </div>
    <h1 id="secret" hidden="true" style="text-align: center">Намально введи</h1><br>
    <p style="text-align: center"><img hidden="true" id="scream" src="3.gif" width="60%" height="60%"></p><br>
    <h1 id="secret1" style="text-align: center" hidden="true">Справа Настя, слева Гриша пытается ее потыкать</h1>
</body>
</html>
