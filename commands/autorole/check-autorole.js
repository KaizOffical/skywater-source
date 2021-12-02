const db = require('quick.db');

module.exports = {
  name: "check-autorole",
  category: 'autorole',
  aliases: ['check-ar', 'car'],
  run: async (client, message, args) => {
    const check = await db.has(`autorole_${message.guild.id}`);
    if(check==false) return message.channel.send("This guild did not set autorole")
    const role = await db.get(`autorole_${message.guild.id}`);
    message.channel.send(`<@${role}> is autorole`)
  }
}