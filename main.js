noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/zvb393Kj/accesory.png');
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterPhoto.jpg');
}

function gotPoses(results) {

    if(results.length > 0) {
        noseX = results[0].pose.nose.x-12;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}