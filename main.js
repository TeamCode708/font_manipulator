function setup() {
    canvas = createCanvas(450, 350);
    canvas.position(150, 180);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}
function draw() {
    image(video, 0, 0, 450, 350);
}
function modelLoaded() {
    console.log("poseNet is initialized!");
}
function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
    }
}