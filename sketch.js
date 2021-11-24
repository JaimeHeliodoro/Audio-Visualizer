let song;
let fft;
let img;
let p;

function preload() {
  song=loadSound('Immortals.mp3');
  img=loadImage('Milky Way.jpg');
}

function setup() {
  createCanvas(750, 585);
  fft=new p5.FFT();
  imageMode(CENTER);
  img.filter(BLUR,2);
  song.play();
}

function draw() {
  background(0);
  strokeWeight(3);
  stroke(255);
  noFill();
  translate(width/2,height/2);
  let wave=fft.waveform();
  image(img,0,0,width,height);
  for (let i=0;i<=1000;i++) {
   let index=floor(map(i,0,1000,0,wave.length-1));
   let r=map(wave[index],-1,1,150,350);
   let x=r*sin(i);
   let y=r*cos(i);
   point(x,y);
  }
}

function mouseClicked() {
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }  
}
