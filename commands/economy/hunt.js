const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports  = {
  name: "hunt",
  category: "economy",
  cooldown: 60,
  run: async (client, message, args) => {
    const gun = await db.get(`gun_${message.author.id}`);
    if(gun < 1) return message.channel.send("You don't have enough gun to hunt");
    db.add(`gun_${message.author.id}`, -1)
    let ani;
    const random = Math.floor(Math.random() * 99 + 1)
    if(random >= 1 && random <= 66) {
      ani = "cow"
    }
    if(random >= 67 && random <= 98) {
      ani = "elephant"
    }
    if(random == 99) {
      ani = "whale"
    }
    const amount = Math.floor(Math.random() * 5 + 1);
    db.add(`${ani}_${message.author.id}`, amount)
    message.channel.send(
      new MessageEmbed()
        .setTitle("Hunt")
        .setDescription(`You caught ${amount} ${ani}(s) and you lost 1 of hunger`)
        .setFooter("Economy")
    )
  }
}