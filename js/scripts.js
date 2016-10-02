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
