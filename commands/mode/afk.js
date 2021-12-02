const db = require('quick.db');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'afk',
  category: "mode",
  run: async (client, message, args) => {
    let reason;
    if(!args[0]) reason = "No Reason";
    else if (args[0]) reason = args.join(" ");
    setTimeout(() => {
      db.set(`afk-${message.author.id}+${message.guild.id}`, reason)      
    }, 500);
    message.channel.send(`${message.author} is afk now! (${reason})`)
  }
}