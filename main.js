noseX=0;
noseY=0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('Computer Detected pose from Model "POSENET.ml5". Log - ');
  }
  
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("(🔔) Response Given By poseNet.ml5 :- " + "'variable noseX = " + noseX + ", variable noseY = " + noseY + "'");
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference - leftWristX-rightWristX;
      console.log("(🔔) Response Given By poseNet.ml5 :- " + "'variable leftWristX = " + leftWristX + ", variable rightWristX = "+rightWristX + ", math.sub[leftWristX, rightWristX].result OUTPUT = "+difference);
    }
    else
    {
        console.log('Error: - PoseNet.ml5 is unable to respond');
        console.log('Result: - null');
        console.log('Preparing to Void Log...');
        console.log('Log Successfully Voided.');
    }
}
  
  function draw() 
  {
    background('#000000');
    fill('#FF0093');
    stroke('#FF0093');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Width and Height of square will be = "+difference+"px";
  }