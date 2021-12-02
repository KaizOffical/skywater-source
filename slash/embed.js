const { Command, ArgumentType } = require("gcommands");
const { MessageEmbed } = require('discord.js')

module.exports = class SayCommand extends Command {
    constructor(...args) {
        super(...args, {
            name: "embed",
            description: "Send embed",
            args: [
                {
                    name: "title",
                    type: ArgumentType.STRING,
                    description: "title of embed", // only for slash 
                },
                {
                  name: "description",
                  type: ArgumentType.STRING,
                  description: "description of embed"
                },
                {
                  name: "color",
                  type: ArgumentType.STRING,
                  description: "color of embed"
                },
                {
                  name: "image",
                  type: ArgumentType.STRING,
                  description: "image in embed"
                },
                {
                  name: "thumbnail",
                  type: ArgumentType.STRING,
                  description: "thumbnail in embed"
                },
                {
                  name: "footer",
                  type: ArgumentType.STRING,
                  description: "footer of embed"
                },
            ]
        })
    }

    async run({client, respond}, args) {
      const embed = new MessageEmbed()
        .setTitle(args[0])
        .setDescription(args[1])
        .setColor(args[2])
        .setImage(args[3])
        .setThumbnail(args[4])
        .setFooter(args[5])
        respond(embed)
    }
}