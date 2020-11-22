class Block{
    constructor(x, y, width, height){
        var options = {
            restitution : 0.4
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);     
      }

    score(){
    if(this.visibility<0 && this.visibility>-105){
    score++;
    }   
    }
    display()
    {
        var angle=this.body.angle;
        if(this.body.speed<3){
            var angle = this.body.angle; 
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else {
            push();
           // var pos= this.body.position;
            World.remove(world,this.body);
            //tint(255,this.visibility);
            this.visibility=this.visibility-5;
          //  rectMode(CENTER);
          //  rect(this.body,pos.x,pos.y,this.body.width,this.body.height);
            pop();
            }
        }
    }