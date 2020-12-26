class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,w,h,options);
         this.w=w;
         this.h=h; 
          World.add(world,this.ground);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(white);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}