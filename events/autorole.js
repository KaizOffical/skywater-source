const client = require('../index')
const db = require('quick.db')

client.on('guildMemberAdd', async (member) => {
  console.log(`[ AUTOROLE ] ${member.id}(${member.user.tag}) join ${member.guild.id} (${member.guild.name})`)
  const check = await db.has(`autorole_${member.guild.id}`);
  if(check==true) {
    member.roles.add(await db.get(`autorole_${member.guild.id}`))
  }
})