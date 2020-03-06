class Chuck extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/chuck.png");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
   super.display();
 }



};