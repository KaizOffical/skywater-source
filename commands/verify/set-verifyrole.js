const db = require('quick.db');

module.exports = {
  name: "set-verifyrole",
  category: 'verify',
  aliases: ['set-vr', 'svr'],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You don't have permission to use this command **(MANAGE_SERVER)**")
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if(!role) return message.reply("Please mentions a valid role");

    db.set(`verify_${message.guild.id}`, role.id);
    message.reply(`Set verify role to **\`${role.name}\`**`)
  }
}