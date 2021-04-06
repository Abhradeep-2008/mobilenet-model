Webcam.set({
    width: 310,
    height:300,
    image_format: 'png',
    png_quality: 100,

    constraints:{
        facingMode: "environment" 
    }
});

camera = document.getElementById("webcam_test");
Webcam.attach(camera);

function take_snapshot(){
    
    Webcam.snap(function(data_uri){
    document.getElementById("snapshot_view").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version", ml5.version);


classifier = ml5.imageClassifier('Mobilenet', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!")
}

function identify_image(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}