const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: 'play-store',
  category: "utils",
  aliases: ['ps', 'playstore'],
  run: async (client, message, args) => {
  let text = args.join("+")
  if(!text) return message.reply('Please specify name of app')
  try {
    await fetch('https://api.popcatdev.repl.co/playstore?q=' + text);
  } catch(e) {
    return message.reply(`Cannot find any app with name is ${text}`)
  }
  let res = await fetch('https://api.popcatdev.repl.co/playstore?q=' + text);
  let json = await res.json();
  const embed = new MessageEmbed()
    .setTitle(json.title)
    .setThumbnail(json.icon)
    .setDescription(json.description)
    .addFields(
      { name: 'Developer', value: `\`\`\`` + json.developer + `\`\`\``, inline: true},
      { name: 'Ratings', value: `\`\`\`` + json.ratings + `\`\`\``, inline: true},
      { name: 'Installations', value: `\`\`\``+ json.installations +`\`\`\``, inline: true},
      { name: 'Genre', value: `\`\`\``+ json.genre +`\`\`\``, inline: true},
      { name: 'Comment', value: `\`\`\``+ json.comment +`\`\`\``, inline: false}
    )
    .setURL(json.url)
    .setFooter(`Play Store | ${client.user.tag}`)
  message.channel.send(embed)
 }
}