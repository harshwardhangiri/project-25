class Box{
    constructor(x,y,width,height){
  var option = {
      isStatic:true
  }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       
    }

    display(){
        rectMode(CENTER);
        rect(this.body.x,this.body.y,this.width,this.height);
    }
}