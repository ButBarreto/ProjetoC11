var boy, fundo;
var boyimg, fundoimg

function preload(){
  //imagens pré-carregadas
fundoimg = loadImage("path.png")
boyimg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  fundo = createSprite (200, 200, 50, 50);
  boy = createSprite (200, 350, 50, 50);
  boy.addAnimation ("correndo", boyimg);
  fundo.addImage (fundoimg);

  fundo.velocityY = 2

  boy.scale = 0.1
}

function draw() {
  background(0);

  if (fundo.y > 400){
    fundo.y = height / 2
  }

  boy.x = mouseX;

  drawSprites();
}
