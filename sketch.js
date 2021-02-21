var grid = []

function preload(){
  boxImg = loadImage("box.png")
  whiteboxImg = loadImage("whitebox.png")
  mineImg = loadImage("mine.png")
}

function setup(){
  createCanvas(700, 700)

  var index = 0
  for(var i = 0; i<10; i++){
      grid[i] = createSprite(i*60 + 80, 80)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12

      grid[i] = createSprite(i*60 + 80, 140)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 200)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 260)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 320)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 380)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 440)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 500)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 560)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
      
      grid[i] = createSprite(i*60 + 80, 620)
      grid[i].addImage(boxImg)
      grid[i].scale=0.12
  }

}

function draw(){
  background(50)

  fill(255)
  textSize(20)
  text("Score:", 20, 20)
  drawSprites()


  for(var i = 0; i < 10; i++){
  var rand = Math.round(random(1,10))

  if(mousePressedOver(grid[i])){
      switch(rand){
    case 1 : grid[i].addImage(mineImg);
    grid[i].scale = 0.115;
    break;
    case 2 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 3 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 4 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 5 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 6 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 7 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 8 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 9 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    case 10 : grid[i].addImage(whiteboxImg);
    grid[i].scale = 0.3;
    break;
    default: break;
      }
    }
  }
  
}

/*
function gameArrays(){
  var a1 = new Array(10)
  a1=[]
  for(var i = 10; i < a1.length; i ++){
    a1 [i]= new Array[10]
  }
}
function Cell(){
  var cell = createSprite(60, 60, 50, 50)
}*/