const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
    name: 'trash',
    category: 'fun',
    aliases: ['trash'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        if(user===message.guild.members.cache.get('744831818632658944')) return message.reply("Cannot trash <@744831818632658944>");

        const avatar = user.displayAvatarURL({ format: "png" })

        const img = await Canvas.delete(avatar)

        message.channel.send(
            new MessageAttachment(img, "deletetrash.png")
        )
    }
}