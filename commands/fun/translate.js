const translate = require('@iamtraction/google-translate');
const { MessageEmbed } = require('discord.js')
require('discord-reply')

module.exports = {
  name: "translate",
  category: "fun",
  aliases: ['tr', 'tl', 'trl'],
  run: async (client, message, args) => {
    const string = args.slice(1).join(' ')
    const langs = args[0];

    if (!langs) return message.reply("Hm... Please type language to translate");
    if (!string) return message.reply("Please specify text to translate")
    try { 
      const trled = translate(`${string}`, { to: `${langs}` }).then(res => {
        console.log(res.text);
        const embed = new MessageEmbed()
        .setTitle("Translate Commands")
        .setColor("#00ffff")
        .addFields(
          { name: "Text", value: "```" + string + "```" },
          { name: "Language", value: "```" + langs + "```" },
          { name: "Result", value: "```" + res.text + "```"}
        )
        .setFooter(`Requested By: ${message.author.tag}`)
        message.channel.send(embed)
      })
    } catch(e) {
      message.channel.send(e)
    }
  }
}