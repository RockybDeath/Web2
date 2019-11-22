package app.servlets;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class ControllerServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        boolean p=true;
        String xString=request.getParameter("X");
        String rString=request.getParameter("R");
        String[] yArray=request.getParameterValues("Y[]");
        if(xString==null || rString==null || yArray==null || yArray.length==0){
//            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request,response);
            response.sendError(504,"Атататата");
        }
        else{
            for(int i=0;i<yArray.length;i++){
                if(("".equals(yArray[i])) || (yArray[i]==null) || (!isInteger(yArray[i]))) p=false;
            }
            if(p && isDouble(xString) && isInteger(rString)) {
                boolean z=true;
                for(int i=0; i<yArray.length; i++){
                    if(!checkParametr(Double.parseDouble(xString),Integer.parseInt(yArray[i]), Integer.parseInt(rString))) z=false;
                }
                if(z) request.getServletContext().getRequestDispatcher("/WEB-INF/area").forward(request, response);
                else response.sendError(504,"Атататата");
            }
            else response.sendError(504,"Атататата");
//                request.getServletContext().getRequestDispatcher("/index.jsp").forward(request,response);
        }
    }
    public boolean isDouble(String str)
    {
        try
        {
            double d = Double.parseDouble(str);
        }
        catch(NumberFormatException nfe)
        {
            return false;
        }
        return true;
    }
    public boolean isInteger(String str)
    {
        try
        {
            int d = Integer.parseInt(str);
        }
        catch(NumberFormatException nfe)
        {
            return false;
        }
        return true;
    }
    public boolean checkParametr(double x,int y, int r){
        return ((x<=3) && (x>=-3) && (y>=-4) && (y<=4) && (r>=1) && (r<=5));
    }
}
