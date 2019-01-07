const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTMxNTQxNzAyMDQ2MTIxOTg2.DxPeoQ.L7Isf6302m1rb_MeteVIP5An6bU'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == '?Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?')
    }


});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);