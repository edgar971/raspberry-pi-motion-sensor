/**
 * Created by edgar on 12/30/15.
 */
var GPIO = require('onoff').Gpio,
    PIR = new GPIO(17, 'in', 'both'),
    Emitter = require('events').EventEmitter;




module.exports = function sensor() {

    var sensor = new Emitter();

    // Watch for any motion
    PIR.watch(function(err,status){

        if(!err && !!status) {
            sensor.emit('motionStart', Date.now());

        } else if(err) {
            exit();
        } else {
            sensor.emit('motionEnd', Date.now());
        }

    });

    /**
     * Function to exit safely
     */
    function exit() {
        PIR.unexport();
        process.exit();
    }

    return sensor;

}();





