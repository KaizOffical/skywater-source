const db = require('quick.db');

module.exports = {
  name: "setting-ticket",
  aliases: [],
  permissions: [],
  category: 'ticket',
  description: "open a ticket!",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("YOU NEED PERMISSIONS __**`ADMINISTRATOR`**__");
    const query = args[0] ? args[0].toLowerCase() : args[0]
    if(!query) return message.reply("Please specify option (Options: Role | Category)")
    if(query=='role') {
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
      if(!role) return message.reply("Please mentions a valid role")

      db.set(`ticketRole_${message.guild.id}`, role.id)
      message.lineReply(`Set ticket role to **\`${role.name}\`**`)
    } else if (query=='category') {
      const cat = message.guild.channels.cache.find(c => c.id == args[1] && c.type == 'category') || message.guild.channels.cache.find(c => c.name == args.slice(1).join(' ') && c.type == 'category')
      if(!cat) return message.lineReply("Please specify valid category id of this guild");

      db.set(`ticketCat_${message.guild.id}`, cat.id)
      message.reply(`Set ticket category to **\`${cat.name}\`**`)
    } else return message.reply("Please specify valid option")
  },
};