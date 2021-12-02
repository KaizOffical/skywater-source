const db = require('quick.db');

module.exports = {
  name: "verify",
  category: 'verify',
  run: async (client, message, args) => {
    const check = await db.has(`verify_${message.guild.id}`)
    if(check==false) return message.reply("This guild did not set verify role, so you can't verify util admin/mod set verify role")

    const guildMember = message.guild.members.cache.get(`${message.author.id}`)
    guildMember.roles.add([await db.get(`verify_${message.guild.id}`)])
      .then(console.log)
      .catch(console.error);

    if(message.guild.id==='850609251038527498') {
      guildMember.roles.remove('852073363375390770')
    }
    message.reply(`✅ <@${message.author.id}> has been verify`)
  }
}