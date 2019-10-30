function preload(){
  // put preload code here
}

var socket;
function setup() {
  createCanvas(windowWidth,windowHeight)

socket = io();

socket.on('mouseBroadcast', newDrawing);
//callback function, in the parenthesis we put the data we received
function newDrawing(receivedData){

  fill('yellow');
  // the ellipse will be in the position of the data we received
  ellipse(receivedData.x, receivedData.y, 10);

}

  background('red');
}

function draw() {
  // put drawing code here

}

function mouseDragged() {
  ellipse(mouseX, mouseY, 20);
// sendDATA is an object
  var sendData = {
    x:mouseX, // these are properties of an object
    y:mouseY
  }
// this is a message we send to the server called mouse and containing mouseX and mouseY
  socket.emit('mouse', sendData);
}
