var Messenger = require('./messenger'),
    Camera = require('./camera'),
    Sensor = require('./sensor');


Sensor.on('motionStart', function(time){

    console.log('there is motion: ' + time);
    Messenger.sendMessage('There is motion: ' + time);
    Camera.takePicture();

});
