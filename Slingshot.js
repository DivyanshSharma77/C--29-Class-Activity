class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA, //bird.body
            pointB: pointB,  //point to which the bird is attached
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png"); 
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
        } 
    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("#301608")
            if(pointA.x<220){
           
                strokeWeight(7);
                //pointA->bird's position
                //pointB-> point to which bird is attached
                
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y); //left side rubber band
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y); //right side rubber band
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                //pointA->bird's position
                //pointB-> point to which bird is attached
                
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y); //left side rubber band
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y); //right side rubber band
                image(this.sling3,pointA.x+20,pointA.y-10,15,30);

            }
            pop();
        }

        image(this.sling1, 200,20);
        image(this.sling2, 170,20);
    }
    
}