class Ball{
    constructor(x,y){
        var option= {
            'isStatic':false,
            'restitution': 0.3,
            'friction': 0.5,
           'density': 1.2
           }
           this.body=Bodies.circle(x, y,40,option) ;
           this.image = loadImage("image/paper.png");
           World.add(world,this.body);
    }

    display() {
          push ();
       translate (this.body.position.x,this.body.position.y);
       fill (239, 255, 99);
       imageMode(CENTER);
       image(this.image,0,0,50);
       pop ();
    }

}