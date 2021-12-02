const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "embed",
  category: "utils",
  aliases: ['emb'],
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Please specify title of embed`);
    if (!args[1]) return message.channel.send(`Please specify description of embed`);
    if (!args[2]) return message.channel.send(`Please specify color of embed`);
    const embed = new MessageEmbed()
      .setTitle(args[0])
      .setDescription(args[1])
      .setColor(args[2])
      .setFooter(`${message.author.tag} just create a custom embed`)
      message.channel.send(embed)
  } 
}