var sys = require('util'),
    exec = require('child_process').exec,
    PICCMD = 'raspistill';



module.exports = function camera() {
    var camera = {};

    camera.takePicture = function() {

        var path = 'files/images/',
            imageName = 'alert-' + Date.now() + '.jpg',
            options = ' -o ';
            command = PICCMD + options + path + imageName;

        exec(command, function(error, stdout, stderr){
            console.log(stdout);
        });

    };

    return camera;


}();
