const commando = require('discord.js-commando');
const discord = require('discord.js')

class R6RosterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'r6roster',
            group: 'simple',
            memberName: 'r6roster',
            description: 'The R6 Siege Roster!'
        });    
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Rainbow Six Siege Roster")
        .addField("Support 1", "N/A")
        .addField("Support 2", "N/A")
        .addField("Entry Fragger", "N/A")
        .addField("Subsitute", "N/A")
        .addField("IGL", "N/A")
        .setColor("#020B0C")
        .setFooter("These Roles Will Change Over The Course Of Time")


        message.channel.sendEmbed(myInfo);

    }
}

module.exports = R6RosterCommand;