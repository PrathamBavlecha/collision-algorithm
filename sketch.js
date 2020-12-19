var rect_fixed,rect_moving

function setup() {
  createCanvas(800,400);
  rect_fixed = createSprite(400, 200, 50, 100);
  rect_fixed.shapeColor = "red"
  rect_moving = createSprite(0,0,50,50)
  rect_moving.shapeColor = "red"
}

function draw() {
  background(0); 
  
console.log(rect_moving.x-rect_fixed.x)

  rect_moving.x = mouseX
  rect_moving.y = mouseY

  if(rect_moving.x - rect_fixed.x <= rect_moving.width/2+rect_fixed.width/2
    &&rect_fixed.x - rect_moving.x <= rect_moving.width/2+rect_fixed.width/2
    &&rect_moving.y - rect_fixed.y <= rect_moving.height/2+rect_fixed.height/2
    &&rect_fixed.y - rect_moving.y <= rect_moving.height/2+rect_fixed.height/2){
    rect_fixed.shapeColor = "blue"
    rect_moving.shapeColor = "blue"
  }else{
    rect_moving.shapeColor = "red"
    rect_fixed.shapeColor = "red"
  }
  
  drawSprites();
}