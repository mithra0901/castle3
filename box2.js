class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.7,
          'friction':0.5,
          'density':1.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };