const { readdirSync } = require('fs')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "help",
  aliases: ['h'],
  category: "bot",
  run: async (client, message, args) => {
    help(client, message)
  }
}

async function help(client, message) {
  const defaultEmbed = new MessageEmbed()
    .setTitle(`All my commands [${client.commands.size}]`)
    .setColor("#00ffff")

    await readdirSync('./commands/').forEach(async dir => {

    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

    let cmds = [];

    await commands.forEach((file) => {
      const pull = require(`../../commands/${dir}/${file}`);
      if (pull.name) cmds.push(pull.name);
    });

    await defaultEmbed.addField(dir[0].toUpperCase() + dir.slice(1) + ` [${cmds.length}]:`, "``" + cmds.join("``, ``") + "``");
  });

  await message.channel.send(defaultEmbed)
}