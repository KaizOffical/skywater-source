const db = require('quick.db');
const ms = require('ms')

module.exports = {
  name: "fish",
  category: "economy",
  run: async (client, message, args) => {
    const timeout = 30000; // 7 days in milliseconds, change to the desired cooldown time, in milliseconds
    const cooldown = await db.fetch(`work_${message.guild.id}_${message.author.id}`);

    if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
      const time = ms(timeout - (Date.now() - cooldown));
      return message.channel.send(`Sorry you must wait **${time}** before using this command again!`);
    } else {
      db.set(`work_${message.guild.id}_${message.author.id}`, Date.now());
    }
    const pole = db.get(`fishingpole_${message.author.id}`)
    if (pole < 1) return message.channel.send("You don't have enough fishing pole to go to fishing")
    const fish = Math.floor(Math.random() * 5)
    db.add(`fishingpole_${message.author.id}`, -1)
    db.add(`fish_${message.author.id}`, fish)
    message.channel.send(`You caught ${fish} fish`)
  }
}