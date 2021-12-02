const db = require('quick.db');

module.exports = {
  name: "check-verifyrole",
  category: 'verify',
  aliases: ['check-vr', 'cvr'],
  run: async (client, message, args) => {
    const check = await db.has(`verify_${message.guild.id}`);
    if(check==false) return message.reply("This guild did not set verify role")
    const role = await db.get(`verify_${message.guild.id}`);
    message.reply(`**\`${role.name}\`** is verify role of this guild`)
  }
}