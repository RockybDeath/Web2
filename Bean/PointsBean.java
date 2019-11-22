package app.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PointsBean implements Serializable {
    private List<Point> points;

    public PointsBean(){
        points=new ArrayList<Point>();
    }
    public void addPoint(Point point){
        points.add(point);
    }
    public List<Point> getPoints() {
        return points;
    }
}
