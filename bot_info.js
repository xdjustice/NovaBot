const commando = require('discord.js-commando');
const discord = require('discord.js')

class BotInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'botinfo',
            group: 'simple',
            memberName: 'botinfo',
            description: 'All the information for the bot'
        });    
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .addField("Developer", "Justice.Nova#2018")
        .addField("Version", "v0.1")
        .addField("Description", " This bot is made for the nova clans discord.")
        .setThumbnail(message.author.avatarURL)
        .setColor("#020B0C")
        .setFooter("Info Will Be Changing Over The Course Of Bot Development")

        message.channel.sendEmbed(myInfo);

    }
}

module.exports = BotInfoCommand;