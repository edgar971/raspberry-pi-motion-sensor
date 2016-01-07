var Twilio = require('twilio'),
    accountSid = 'AC9622c3069ca2af6268acd4a97c1b4943',
    authToken = '0cc365765ca782911bcf02bcb8bd5036';


module.exports = function messenger() {

    var client = Twilio(accountSid,authToken),
        messenger = {};

    messenger.sendMessage = function sendMessage(message) {
        var body = message || 'Hello from Raspberry PI!';
        client.messages.create({
            to: "9203287541",
            from: "+19204893099",
            body: body
        }, function(err, message) {
            console.log(message.sid);
        });
    };


    return messenger;

}();