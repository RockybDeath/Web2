<%--
  Created by IntelliJ IDEA.
  User: Киря
  Date: 06.11.2019
  Time: 3:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html5>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Don't be bad lab</title>
  <link href="st.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="jquery-3.4.1.min.js"></script>
</head>
<body id="mainBody" onload="drawCanwas('canvas',1)">
<jsp:useBean id="pointsBean" class="app.model.PointsBean" scope="session"/>
<table>
  <tr>
    <th Shapka="cool">Kudymov Valera Sergeewitch<br>
      Group P3202<br>Variant 98381</th>
    <th id="nickname"></th>
  </tr>
  <table id="supTable">
    <tr>
      <th id="leftColumn">
        <canvas id="canvas" onclick="clicCanvas('canvas',document.getElementById('R1').value)" style="background-color:#ffffff; border-radius: 20px;" width="300" height="300"></canvas>
      </th>
      <form id="Sender">
        <th id="imStolb">
          <p>Coordinate Y</p>
          <div class="flex">
            <done>-4<input type="checkbox" name="Y" autocomplete="off" class="rb" id="y_1" value="-4"></done>
            <done>-3<input type="checkbox" name="Y" class="rb" autocomplete="off" id="y_2" value="-3"></done>
            <done>-2<input type="checkbox" name="Y" class="rb" id="y_3" autocomplete="off" value="-2"></done>
            <done>-1<input type="checkbox" name="Y" class="rb" id="y_4" value="-1" autocomplete="off"></done>
            <done>0<input type="checkbox" name="Y" class="rb" id="y_5" value="0" autocomplete="off"></done>
            <done>1<input type="checkbox" name="Y" class="rb" id="y_6" value="1" autocomplete="off"></done>
            <done>2<input type="checkbox" name="Y" class="rb" id="y_7" value="2" autocomplete="off"></done>
            <done>3<input type="checkbox" name="Y" class="rb" id="y_8" value="3" autocomplete="off"></done>
            <done>4<input type="checkbox" name="Y" class="rb" id="y_9" value="4" autocomplete="off"></done>
          </div>
          <br>
          <p class="kaskad">Coordinate X</p>
          <input name="X" autocomplete="off" oninput="onX()" id="Yea" type="text" placeholder="Give me your number"><br>
          <p>Radius R</p>
          <select name="R" id="R1">
            <option disabled="disabled">Please, choose value again</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br>
          <p>When you ready, please, click</p>
          <p id="error" style="color: red"></p>
          <p><input type="button" value="Проверить" onclick="check()"></p>
        </th>
      </form>
    </tr>
  </table>
  <div id="results"></div>
</table>
<script type="text/javascript" src="Fall1.js"></script>
</body>
</html>
