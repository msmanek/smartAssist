// Myo Code
Myo.connect();
var stepCounter = 1;


//Whenever we get a pose event, we'll update the image sources with the active version of the image
Myo.on('pose', function(pose){
    console.log(pose);
    if (pose === 'wave_out') {
        $('#step-' + stepCounter).hide();
        $('#step-' + (stepCounter + 1)).show();
        stepCounter++;
    } else if (pose === 'wave_in') {
        $('#step-' + stepCounter).hide();
        $('#step-' + (stepCounter - 1)).show();
        stepCounter--;
    }
    console.log(stepCounter);
    // $('img.' + pose).attr('src', 'img/' + pose + '_active.png');
    // $('.mainPose img').attr('src', 'img/' + pose + '_active.png');
});

//Opposite of above. We also revert the main img to the unlocked state
Myo.on('pose_off', function(pose){
    // $('img.' + pose).attr('src', 'img/' + pose + '.png');
    // $('.mainPose img').attr('src', 'img/unlocked.png');
});


//Whenever a myo locks we'll switch the main image to a lock image
Myo.on('locked', function(){
    // $('.mainPose img').attr('src', 'img/locked.png');
});

//Whenever a myo unlocks we'll switch the main image to a unlock image
Myo.on('unlocked', function(){
    // $('.mainPose img').attr('src', 'img/unlocked.png');
});




$(document).ready(function () {
    $('html').keydown(function(e) {
        if(e.keyCode == 37) { // left
            $('#step-' + stepCounter.toString()).hide();
            $('#step-' + (stepCounter - 1).toString()).show();
            stepCounter--;
        } else if(e.keyCode == 39) { // right
            $('#step-' + stepCounter).hide();
            $('#step-' + (stepCounter + 1).toString()).show();
            stepCounter++;
        }
        console.log(stepCounter);
    });
});