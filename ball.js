class Ball{
    constructor(x,y,radius){
var options={

    
    density:0.04,
    frictionAir:0.005
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
World.add(myWorld,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
    fill("brown")
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}