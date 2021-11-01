var randomAdd


function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  translate(width/2,height/2)
  stroke(255)
  angleMode(DEGREES)


  numberOfTree = int(random(2,4))
  for (var i = 0; i < numberOfTree; i++){

    r = random(255)
    g = random(255)
    b = random(100)


    push()
    stroke(r,g,b)
    rotate(360/numberOfTree*i+random(40))
    branch(random(100,200))
    pop()
  }
}

function branch(treeSize){
  randomAdd = random(treeSize)
  randomAngle = random(60)
  strokeWeight(treeSize*0.1)

  line(0,0,0, randomAdd - treeSize)
  translate(0, randomAdd - treeSize)
  if (treeSize > 2){
    push()
    rotate(randomAngle)
    branch(treeSize*0.7)
    pop()

    push()
    rotate(-randomAngle)
    branch(treeSize*0.7)
    pop()
  }
}
