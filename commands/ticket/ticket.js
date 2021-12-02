const db = require('quick.db');
const { MessageButton } = require('discord-buttons');
const { MessageEmbed } = require('discord.js'); 

module.exports = {
  name: "ticket",
  aliases: [],
  permissions: [],
  category: 'ticket',
  description: "open a ticket!",
  run: async (client, message, args) => {
    const cat = await db.get(`ticketCat_${message.guild.id}`)
    const role = await db.get(`ticketRole_${message.guild.id}`)
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    
    channel.setParent(cat);

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const support = new MessageEmbed()
    .setTitle(`Ticket`)
    .setDescription(`${role ? "||<@&" + role + ">||" : db.get(`ticketRole_${message.guild.id}`)} Thank you for contacting support!`)
    .setFooter(`React 🔒 to lock ticket | React ⛔ to delete ticket`)

    const lock = new MessageButton()
    .setStyle('green')
    .setLabel('Lock This Ticket')
    .setEmoji('🔒')
    .setID('lock')

    const del = new MessageButton()
    .setStyle('red')
    .setLabel('Delete This Ticket')
    .setEmoji('⛔')
    .setID('del')

    channel.send({ buttons: [lock, del], embed: support }).then(message => {
      const filter = (button) => button.clicker.user.id === button.clicker.user.id;
      const collector = message.createButtonCollector(filter, { time: 86400000 });

      collector.on('collect', async b => {
        b.defer()
        if(b.id === 'del') { // If User Click Yes Button
          b.channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => channel.delete(), 5000);
          collector.stop()
        } else if(b.id === 'lock') { // If User Click No Button
          b.channel.send(`Locked this channel`)
          channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false });
        }
      })
    })

    message.channel
      .send(`We will be right with you! ${channel}`)
  },
};