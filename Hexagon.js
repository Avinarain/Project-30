class Hexagon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];

      }
     
  
      
      }
    }
  