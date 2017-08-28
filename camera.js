var sys = require('util'),
    exec = require('child_process').exec,
    PICCMD = 'raspistill';

module.exports = function camera() {

    // Camera API object
    var camera = {};

    // Function to take the picture
    camera.takePicture = function() {

        var path = './files/images/',
            imageName = 'alert-' + Date.now() + '.jpg',
            options = ' -o ';
            command = PICCMD + options + path + imageName;

        // Execute the bash command and log the output
        exec(command, function(error, stdout, stderr){
            console.log(stdout);
        });

    };

    // Return the camera API
    return camera;

}();
