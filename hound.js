const commando = require('discord.js-commando');
const discord = require('discord.js')

class HoundCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hound',
            group: 'simple',
            memberName: 'hound',
            description: 'Tells info about hound'
        });    
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
  .setTitle("Hound")
  .addField("Name", "Hound")
  .addField("Age", "12")
  .addField("Description", "Im good at siege, I stream occasionally and ya")
  .setColor("#020B0C")
  .attachFile('commands/simple/coinpics/eyy.jpg')
  .setImage('attachment://commands/simple/coinpics/eyy.jpg');
message.channel.sendEmbed(myInfo);

    
    }
}

module.exports = HoundCommand;