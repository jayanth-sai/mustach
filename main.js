nosex=0;
nosey=0;

function preload() {

  image_mustach = loadImage("mustach.png")

}

function setup() {
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
   video.size(300, 300);
}

function draw() {
  image(video, 0, 0, 300, 300);
  image (image_mustach, nosex,nosey,80,35)
}

function take_snapshot(){    
  save('student_name.png');
}

function modelLoaded(){
  console.log("model is loaded")
}

function gotPoses(results){
  if (results.length > 0 )
{console.log (results) ;
  
  nosex = results[0].pose.nose.x-35
  nosey = results[0].pose.nose.y
}
}