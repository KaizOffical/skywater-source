const { MessageEmbed, Util } = require('discord.js');
const { parse } = require('twemoji-parser');

module.exports = {
  name: 'emoji',
  category: 'info',
  aliases: ['em', 'eji'],
  run: (client, message, args) => {
    const emoji = args[0];
      if (!emoji) return message.channel.send("Please specify emoji")

      let custom = Util.parseEmoji(emoji);
      const emojis = new MessageEmbed()
      .setTitle(`Bigger Emoji of ${emoji}`)
      .setColor("#1eff00")

      if (custom.id) {
        let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`
        emojis.setImage(link)
        return message.channel.send(emojis)
      } else {
        let parsed = parse(emoji, { assetType: 'png' });
        if (!parsed[0]) return message.channel.send("Emoji not defined");
        emojis.setImage(parsed[0].url);
        return message.channel.send(emojis)
      }
  }
}