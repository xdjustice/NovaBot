const commando = require('discord.js-commando');
const discord = require('discord.js')

class PineconeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pinecone',
            group: 'simple',
            memberName: 'pinecone',
            description: 'Tells info about pinecone'
        });    
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
  .setTitle("Pine.Nova")
  .addField("Name", "Pine.Nova")
  .addField("Age", "12")
  .addField("Description", "I'm pretty decent at siege, I upload on Youtube my channel is lil pinecone.")
  .setColor("#020B0C")
  .attachFile('commands/simple/coinpics/pinecone.jpg')
  .setImage('attachment://commands/simple/coinpics/pinecone.jpg');
message.channel.sendEmbed(myInfo);

    
    }
}

module.exports = PineconeCommand;