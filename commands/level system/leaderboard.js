const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const data = require('simplest.db');
const db = new data({
  path: "./database/leveling.json"
})

module.exports = {
  name: "top economy",
  aliases: ['leaderboard economy', 'lb economy'],
  category: "economy",
  run: async (client, message, args) => {
    let top;
    if (!args[1]) top = 5;
    if (args[1]) top = args[1]
    if (isNaN(top)) top = 5;
    let money = db.entries().filter(data => data.key.startsWith(`level_`)).sort((a, b) => b.value - a.value);

    var finalLb = "";
    for (var i = 0; i < top; i++) {
      if (i >= top) break;
      if (money[i].value === null) money[i].value = 0
      finalLb += `#${i + 1} | ${client.users.cache.get(money[i].key.split('_')[1]).tag ? client.users.cache.get(money[i].key.split('_')[1]).tag : "undefined#0000"}: ${money[i].value}\n`;
    };

    let money2 = db.entries().filter(data => data.key.startsWith(`totalxp_`)).sort((a, b) => b.value - a.value);

    var finalLb2 = "";
    for (var i = 0; i < top; i++) {
      if (i >= top) break;
      if (money2[i].value === null) money2[i].value = 0
      finalLb2 += `#${i + 1} | ${client.users.cache.get(money2[i].key.split('_')[1]).tag ? client.users.cache.get(money2[i].key.split('_')[1]).tag : "undefined#0000"}: ${money2[i].value}\n`;
    };
    const embed = new MessageEmbed()
      .setTitle("📋 LeaderBoard Economy Global 📋")
      .addField("TOP WALLET <a:fiber_twitch:825549167828664350>", finalLb)
      .addField("TOP BANK <a:fiber_twitch:825549167828664350>", finalLb2)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    return message.channel.send(embed);
  }
}