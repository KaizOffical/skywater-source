module.exports = {
    name: 'server-info',
    aliases: ['si'],
    description: "This shows the server info",
    run: (client, message, args) => {
        const Discord = require('discord.js');

        const botSize = message.guild.members.cache.filter(m => m.user.bot).size

        const { name, owner, roles, channels, createdAt, premiumSubscriptionCount, memberCount, region } = message.guild
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(name)
                .setDescription(`Some simple server information.`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('Owner', owner, true)
                .addField('Boosters', premiumSubscriptionCount, true)
                .addField('Region', region.toUpperCase(), true)
                .addField('Total Members', memberCount, true)
                .addField('Total Bots', botSize, true) 
                .addField('Roles', roles.cache.size, true)
                .setFooter(`Created on`)
                .setColor('#FF0000')
                .setTimestamp(createdAt)
        )

        message.channel.send(
          new Discord.MessageEmbed()
            .setTitle('Server Info')
            .setColor('#00ffff')
            .addField('General Informations', [
              `Name: ${message.guild.name}`,
              `ID: ${message.guild.id}`,
              `Owner: ${owner}`
            ])
            .addField('Server Counts', [
              `Total Users: ${message.guild.members.cache.size}`,
              `Total Humans: ${message.guild.members.cache.filter(m => !m.user.bot).size}`,
              `Total Bots: ${message.guild.members.cache.filter(m => m.user.bot).size}`,
              `\`\`\`Roles: ${roles.cache.size} role(s) | ${message.guild.roles.cache.map(r => r.name).join(', ') || 'Too much roles'}\`\`\``,
              `Emojis: ${message.guild.emojis.cache.size} emoji(s)`,
              `Channels: ${message.guild.channels.cache.size} channel(s)`
            ])
            .addField('Additional Information', [
              `Created: ${createdAt}`,
              `Region: ${region}`,
              `Boosts Count: ${premiumSubscriptionCount} boost(s)`
            ])
            .setFooter(`Server Info | ${client.user.tag}`)
        )
    }
}