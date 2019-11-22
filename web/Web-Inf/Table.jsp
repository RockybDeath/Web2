<%@ page import="app.model.Point" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Collections" %><%--
  Created by IntelliJ IDEA.
  User: Киря
  Date: 08.11.2019
  Time: 0:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Результатыпроверки</title>
    <meta charset="UTF-8">
    <link href="st.css" rel="stylesheet" type="text/css">
</head>
<body>
<jsp:useBean id="pointsBean" class="app.model.PointsBean" scope="session"/>
    <table align="center" width="60%" bgcolor="black" class="superTable">
        <tr>
            <td>X</td>
            <td>Y</td>
            <td>R</td>
            <td>Результат</td>
        </tr>
            <% List<Point> points=pointsBean.getPoints();
            while (points.size()>10){
                points.remove(0);
            }
            List<Point> res=new ArrayList<>(points);
                List<Point> res1=new ArrayList<>(points);
                Collections.reverse(res);
                for(Point point:res){
                    %>
        <tr class="tea">
            <td class="need2"><%=point.getX()%></td>
            <td class="need1"><%=point.getY()%></td>
            <td class="need"><%=point.getR()%></td>
            <td><%=point.isHit() ? "Дя! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" : "Эхь (ಥ﹏ಥ)"%></td>
            <td hidden="true" class="need3"><%=point.isHit() ? "true" : "false"%></td>
        </tr>
        <%}%>
    </table>
    <p id="secret" hidden="true"><%=pointsBean.getPoints().get(pointsBean.getPoints().size()-1).isHit()%></p>
</body>
</html>
