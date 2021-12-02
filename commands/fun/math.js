const { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } = require('mathjs');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "maths",
  category: "fun",
  aliases: ['calculator', 'cal'],
  run: async (client, message, args) => {
    const math = args.join(' ');

    if(!math) return message.reply("Please import value");
    try{
      let result = evaluate(math)
      const embed = new MessageEmbed()
        .setTitle("Maths")
        .setColor("#00ffff")
        .addFields(
          { name: "Input", value: "```" + math + "```" },
          { name: "Result", value: "```" + result + "```" }
        )
        .setFooter(`Requested By: ${message.author.tag}`)
      message.channel.send(embed)
    } catch(e) {
      message.reply("Somethings went wrong!")
    }
  }
}