class Bob{
    constructor(x,y,radius) {
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius);
      World.add(world, this.body);
    }
    display(color){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(color);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
