/**
 * Created by edgar on 12/30/15.
 */
var GPIO = require('onoff').Gpio,
    PIR = new GPIO(17, 'in', 'both');





PIR.watch(function(err,status){

    if(!err && !!status) {
        console.log('There is motion: ' + status);
        sendMessage();
    } else if(err) {
        exit();
    } else {
        console.log(status);
    }

});


/**
 * Function to exit safely
 */
function exit() {
    PIR.unexport();
    process.exit();
}