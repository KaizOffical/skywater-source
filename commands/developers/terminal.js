const { MessageEmbed } = require('discord.js');
const child = require('child_process');

module.exports = {
  name: "terminal",
  dev: true,
  category: "developers",
  aliases: ['term', 'shell'],
  run: async (client, message, args) => { 
    const command = args.join(" ");
    if (!command) return message.reply("Please specify run command")

    child.exec(command, (err, res) => {
      if (err) return message.reply(err)
      message.channel.send(res.slice(0, 2000), { code: 'js' })
    })
  }
}