const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "withdraw",
  category: "economy",
  aliases: ['with'],
  run: async (client, message, args) => {
    const money = args[0];
    if(!money) return message.reply("Please specify amount to withdraw")
    db.add(`cash_${message.author.id}`, money);
    db.add(`bank_${message.author.id}`, '-'+money);
    const embed = new MessageEmbed()
      .setTitle("Withdraw")
      .setDescription(`<@${message.author.id}> withdraw ${money} from your bank to your wallet`)
      .setFooter(`Economy`)
    message.channel.send(embed)
  }
}