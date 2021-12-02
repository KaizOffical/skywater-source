const db = require('quick.db');

module.exports = {
  name: "set-autorole",
  category: 'autorole',
  aliases: ['set-ar', 'sar'],
  cooldown: 20,
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permission to use this command **(MANAGE_ROLES)**")
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if(!role) return message.channel.send("Please specify a valid role");

    await db.set(`autorole_${message.guild.id}`, role.id)
    message.channel.send(`${role.name} is the autorole of this guild`)
  }
}