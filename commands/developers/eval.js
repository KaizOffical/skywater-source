const Discord = require('discord.js');

module.exports = {
    name: 'eval',
    category: 'developers',
    dev: true,
    aliases: ['e'],
    run: async (client, message, args) => {
   try{ 
        let process = args.join(' ');
        if (!process) {
            return message.channel.send('Please give a code to evaluate!');
        }
        let e;
        try {
            e = eval(process);
        } catch (err) {
            e = err;
        }
        let embed = new Discord.MessageEmbed()
            .setColor('00fff8')
            .addField(':file_folder: Input', `\`\`\`js\n${process}\`\`\``)
            .addField(':open_file_folder: Output', `\`\`\`${e}\`\`\``)
            .addField('Type Of', `\`\`\`${typeof e}\`\`\``);
        message.channel.send(embed);
    } catch(e) {
      message.channel.send(`\`\`\`${typeof e}\`\`\``)
    }
    }
};