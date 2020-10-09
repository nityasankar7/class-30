class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255;//opaqe

  }
  display(){
    console.log(this.body.speed)
   
    if(this.body.speed<0.277){
      super.display();

    }
    else{
      push();
      //World.remove(world,this.body)
     
      this.Visiblity=this.Visibility-50;//making it transparent
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop();

    }
  }

}
