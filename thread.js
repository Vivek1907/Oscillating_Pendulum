class Thread{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 1/750,
            'length': 50
        }
        this.pointB = pointB;
        this.thread = Constraint.create(options);
        World.add(world,this.thread);
    }

    display(){
       var pointA = this.thread.bodyA.position;
       var pointB = this.thread.pointB;
       push();
       stroke(255);
       strokeWeight(10);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
    }
}