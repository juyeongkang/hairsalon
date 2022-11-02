var cover;
var hover;
var hiarcut;
var mp3player;
var click1;
var click2;
var click3;
var click4;
var click7;
var click8;
var bgm;
var scn;
let canvas;
var letter;
var yawn;
var clock;
var clocksound;
var light;
var lightsound;
var hairdressor;
var mainbg;
var desk;
var desksound;

function preload() {
  cover = loadImage("assets/enterance.jpeg");
  hover = loadSound("assets/clickingsound.mp3");
  haircut = loadSound("assets/cuttinghair.mp3");
  yawn = loadSound("assets/yawn.mp3");
  clocksound = loadSound("assets/clock.mp3");
  lightsound = loadSound("assets/light-switch.mp3");
  bgm = loadSound("assets/salon.mp3");
  mainbg = loadImage("assets/mainimage.png");
  hairdressor = loadImage("assets/hd.png");
  mp3player = loadImage("assets/speaker.png");
  clock = loadImage("assets/clock.png");
  customer = loadImage("assets/customer.png");
  light = loadImage("assets/light.png");
  letter = loadImage("assets/letter.png");
  desk = loadImage("assets/desk.png");
  desksound = loadSound("assets/desk.mp3");

}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('page');
    scn = new SceneManager();

    scn.addScene(start);
    scn.addScene (salonenter);
    scn.showNextScene();

}

function draw()
{
    scn.draw();

}

function mousePressed()
{
  scn.mousePressed();
}

function keyPressed()
{
scn.keyPressed();
}
