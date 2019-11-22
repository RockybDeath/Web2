package app.model;

import java.io.Serializable;

public class Point implements Serializable {
    private double x;
    private int y;
    private int r;
    private boolean hit;
    public Point (double x,int y, int r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.hit=check(x,y,r);
    }
    public double getX(){
        return x;
    }

    public int getR() {
        return r;
    }

    public int getY() {
        return y;
    }

    public boolean isHit() {
        return hit;
    }

    boolean check(double x, double y, double r){
//        boolean p=true;
//        if(!((x>=0) && (x<=(r/2)) && (y>=0) && (y<=(r/2)) && ((y*y+x*x)<=(r*r/4)))) p=false;
//        if(!((x>=0) && (x<=(r/2)) && (y<=0) && (y>=(-r)))) p=false;
//        if(!((y<=0) && (y>=(-r)) && (x<=0) && (x>=(-r/2)) && (y<=((-r)-2*x)))) p=false;
        return (((x>=0) && (x<=(r/2)) && (y>=0) && (y<=(r/2)) && ((y*y+x*x)<=(r*r/4)))
                ||
                ((x>=0) && (x<=(r/2)) && (y<=0) && (y>=(-r)))
                ||
                ((y<=0) && (y>=(-r)) && (x<=0) && (x>=(-r/2)) && (y>=((-r)-2*x)))
                );
    }
}
