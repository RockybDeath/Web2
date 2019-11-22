package app.servlets;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class AreaCheckFilter implements Filter {
    public void init(FilterConfig rr) {}
    public void doFilter(ServletRequest servletRequest,ServletResponse servletResponse,FilterChain filterChain) throws IOException,ServletException{
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse goAway=(HttpServletResponse) servletResponse;
        String nickname=request.getParameter("nickname");
        if(nickname!=null && !nickname.contains("Жаворонков") && !"".equals(nickname.trim()) ){
            filterChain.doFilter(request,goAway);
        }
        else{
            goAway.setStatus(418);
            goAway.getWriter().write("/myanimeweb_war/login.jsp");
            //goAway.sendError(418,"myanimeweb_war/login.jsp");
            return;
        }
    }
    public void destroy(){}
}
