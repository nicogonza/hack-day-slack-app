/**
 * Created by nicogonzalez on 10/22/16.
 */
/**
 * Created by nicogonzalez on 10/22/16.
 */
var Bot = require('slackbots');

// create a bot
var settings = {
    token: 'xoxp-37047188646-80636620502-94945881557-2e9c09d7603a20a3ed790c0a1890d41c',
    name: 'Line Queue'
};
var bot = new Bot(settings);

bot.on('start', function() {
    //bot.postMessageToChannel('hackday-test', 'Hello channel!');
    //bot.postMessageToUser('some-username', 'hello bro!');
    //bot.postMessageToGroup('some-private-group', 'hello group chat!');
});

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
    if( data['text']=="speak"){
        console.log("in text check");
        bot.postMessageToChannel('hackday-test', 'Hey mate!');
    }
});