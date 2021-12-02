const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "inventory",
  category: "economy",
  aliases: ["inv"],
  run: async (client, message, args) => {
    const fp = db.get(`fishingpole_${message.author.id}`)
    const gun = db.get(`gun_${message.author.id}`)
    const cookie = db.get(`cookie_${message.author.id}`)
    const tools = [];
    if(fp || fp > 0) {
      tools.push("🎣 • Fishing Pole: " + fp)
    }
    if(gun || gun > 0) {
      tools.push("🔫 • Gun: " + gun)
    }
    if(cookie || cookie > 0) {
      tools.push("🍪 • Cookie: " + cookie)
    }
    const animals = [];
    db.get(`cow_${message.author.id}`) > 0 ? animals.push("🐄 • Cow: " + db.get(`cow_${message.author.id}`)) : db.get(`cow_${message.author.id}`)
    db.get(`fish_${message.author.id}`) > 0 ? animals.push("🐟 • Fish: " + db.get(`fish_${message.author.id}`)) : db.get(`cow_${message.author.id}`)
    db.get(`whale_${message.author.id}`) > 0 ? animals.push("🐳 • Whale: " + db.get(`whale_${message.author.id}`)) : db.get(`cow_${message.author.id}`)
    db.get(`elephant_${message.author.id}`) > 0 ? animals.push("🐘 • Elephant: " + db.get(`elephant_${message.author.id}`)) : db.get(`cow_${message.author.id}`)
    const embed = new MessageEmbed()
      .setTitle(`${message.author.tag}'s inventory`)
      .setDescription(`
Your Hunger: ${db.get(`hunger_${message.author.id}`)}

**__Tools:__**

${tools.join("\n") ? tools.join("\n") : "No Tools Found"}

**__Animals:__**

${animals.join("\n") ? animals.join("\n") : "No Animals Found"}

      `)
      .setFooter(`SkyWater Bot Economy`)
    message.channel.send(embed)
  }
}