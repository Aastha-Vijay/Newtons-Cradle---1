class Bob{
    constructor(x,y,radius){
        var options={
            //isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.diameter = radius*2;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill("lightgreen");
        ellipse(0,0,this.diameter, this.diameter);
        pop();
    }
}