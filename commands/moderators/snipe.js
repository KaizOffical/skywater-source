const moment = require('moment');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "snipe",
  category: 'moderators',
  aliases: ['snp'],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to use this command (__MANAGE_MESSAGES__)");

    const snipes = client.snipes.get(message.channel.id);
    if(!snipes) return message.reply(`There is no message deleted in this channel`);

    const snipe = +args[0] - 1 || 0;
    const target = snipes[snipe];
    if(!target) return message.reply(`There is only ${snipes.length} messages!`)

    const { msg, time, image } = target;
    message.channel.send(
      new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setImage(image)
        .setTitle(`${moment(time).fromNow()}`)
        .setDescription(msg.content)
        .setFooter(`ID: ${msg.id} | Message ${snipe + 1}/${snipes.length}`)
        .setColor("#00ffff")
    )
  }
}