var Messenger = require('./messenger'),
    Camera = require('./camera'),
    Sensor = require('./sensor');

// Send the message and take the picture when there is motion
Sensor.on('motionStart', function handler(time){

    console.log('there is motion: ' + time);
    Messenger.sendMessage('There is motion: ' + time);
    Camera.takePicture();

});
