const client = require('../index')
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

client.on('guildMemberAdd', async member => {
  const chann = await db.get(`welcomeChannel-${member.guild.id}`)

  const channel = member.guild.channels.cache.find(ch => ch.id === chann);

  if (!channel) return;

  if(await db.get(`welcomeColor-${member.guild.id}`) == null) {
    await db.set(`welcomeColor-${member.guild.id}`, 'https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png')
  }

  const col = await db.get(`welcomeColor-${member.guild.id}`)


  const embed = new MessageEmbed()
  .setTitle('Welcome To Server')
  .setDescription(`Welcome <@${member.id}> to \`${member.guild.name}\`! You are member ${member.guild.members.cache.size} of this server`)
  .setImage(`https://api.popcatdev.repl.co/welcomecard?background=https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png&text1=${encodeURIComponent(member.user.username)}%20${encodeURIComponent(member.user.discriminator)}&text2=Welcome+to+${encodeURIComponent(member.guild.name)}&text3=Member+${member.guild.members.cache.size}&avatar=${encodeURIComponent(member.user.displayAvatarURL({ format: 'png' }))}`)
  
  channel.send(embed)
})

/*
client.on('guildMemberAdd', async member => {
  const chann = await db.get(`welcomeChannel-${member.guild.id}`)
  const channel = member.guild.channels.cache.find(ch => ch.id === chann);

  if (!channel) return;
  if(await db.get(`welcomeColor-${member.guild.id}`) == null) {
    await db.set(`welcomeColor-${member.guild.id}`, 'https://wallpapercave.com/wp/wp5128415.jpg')
  }

  const col = await db.get(`welcomeColor-${member.guild.id}`)

 let data = await canva.welcome(member, { link: col })

//GRADIANTS NAME - coldsky, peakblue, pinkman, aqua, darkness, angel





   const attachment = new Discord.MessageAttachment(

     data,

     "welcome-image.png"

   );

   channel.send(

     `Welcome <@${member.id}> to server \`${member.guild.name}\`! You are member of ${member.guild.members.cache.size} this server`,

     attachment

   );  


  });
*/