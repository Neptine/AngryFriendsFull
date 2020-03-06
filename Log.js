class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,90,height,angle);
    this.image = loadImage("sprites/nn.png");
    Matter.Body.setAngle(this.body, angle);
  }
}