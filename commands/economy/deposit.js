const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "deposit",
  category: "economy",
  aliases: ['dep'],
  run: async (client, message, args) => {
    const money = args[0];
    if(!money) return message.reply("Please specify amount to deposit")
    db.add(`cash_${message.author.id}`, '-'+money);
    db.add(`bank_${message.author.id}`, money);
    const embed = new MessageEmbed()
      .setTitle("Deposit")
      .setDescription(`<@${message.author.id}> deposit ${money} from your wallet to your bank`)
      .setFooter(`Economy`)
    message.channel.send(embed)
  }
}