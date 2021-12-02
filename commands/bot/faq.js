const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "faq",
  aliases: [],
  category: "bot",
  run: async (client, message, args) => {
    const cnt = args.join(" ");
    if(!cnt) return message.channel.send('Please specify your FAQ')
    const embed = new MessageEmbed()
    .setTitle('SEND A FAQ')
    .setColor("#00ffff")
    .addField(`Author`, `${message.author.tag}`)
    .addField(`Content`, `\`\`\`${cnt}\`\`\``)

    const ch = client.channels.cache.get("862246769048289292");

    ch.send(embed)

    message.channel.send(embed)
  }
}