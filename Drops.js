class Drop {

    constructor(x, y) {

        var options = {
            restitution:1.0,
            friction:1.3,
            density:0.1
        }

        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 6;
        World.add(world, this.body);

    }

    updateYPos() {

        if(this.body.position.y > height) 
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0,400)});

    }

    display() {

        fill("lightblue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

    }
    
}