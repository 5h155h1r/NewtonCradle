class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY  ){
        this.offsetX = offsetX
        this.offsetY = offsetY
         var options  = {
             bodyA:bodyA,
             bodyB:bodyB,
             pointB:{x:this.offsetX, y:this.offsetY}

         }
         this.rope = Constraint.create(options);
         World.add(world, this.rope);   
    }
    
     display () {
        var bodyA = this.rope.bodyA.position;
        var bodyB = this.rope.bodyB.position;
        var A1 = bodyB.x
        strokeWeight(4);
        stroke("red")
        line(bodyA.x, bodyA.y, bodyB.x + this.offsetX, bodyB.y + this.offsetY);
     }
}