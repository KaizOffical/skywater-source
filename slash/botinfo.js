const { SlashCommand } = require("gcommands"),
    config = require("../../config.json")
const {
  Client,
  Message,
  MessageEmbed,
  version: djsversion,
} = require("discord.js");
const version = require("../../package.json").version;
const { utc } = require("moment");
const os = require("os");
const ms = require("ms");

module.exports = (async () => {
    return {
        name: "botinfo",
        description: "Shows Bot Info",
        run: async({client, respond}, args) => {
            const core = os.cpus()[0];
    const embed = new MessageEmbed()
      .setURL(client.web)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#00ffff")
      .addField("General", [
        `**❯ Client:** ${client.user.tag} (${client.user.id})`,
        `**❯ Commands:** ${client.commands.size}`,
        `**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
        `**❯ Users:** ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`,
        `**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
        `**❯ Creation Date:** ${utc(client.user.createdTimestamp).format(
          "Do MMMM YYYY HH:mm:ss"
        )}`,
        `**❯ Node.js:** ${process.version}`,
        `**❯ Version:** v${version}`,
        `**❯ Discord.js:** v${djsversion}`,
        "\u200b",
      ])
      .addField("System", [
        `**❯ Platform:** ${process.platform}`,
        `**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
        `**❯ CPU:**`,
        `\u3000 Cores: ${os.cpus().length}`,
        `\u3000 Model: ${core.model}`,
        `\u3000 Speed: ${core.speed}MHz`,
      ])
      .setTimestamp();
    
            respond({
                content: embed,
                ephemeral: true
            })
        }
    }
})();