package app.servlets;
import app.model.Point;
import app.model.PointsBean;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AreaCheckServlet extends HttpServlet {
    public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException, ServletException {
        String xString=request.getParameter("X");
        String rString=request.getParameter("R");
        double x=Double.parseDouble(xString);
        int r=Integer.parseInt(rString);
        String[] yArray=request.getParameterValues("Y[]");
        PointsBean pointsBean=(PointsBean) request.getSession().getAttribute("pointsBean");
        response.setContentType("text/html; charset=UTF-8");
        for(int i=0; i<yArray.length; i++){
            Point point=new Point(x, Integer.parseInt(yArray[i]),r);
            pointsBean.addPoint(point);
        }
        request.getServletContext().getRequestDispatcher("/WEB-INF/Table.jsp").include(request,response);
    }
}
