const client = require('../index')
const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const ms = require('ms')

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  const database = require('simplest.db')
  const prefixdb = new database({
    path: './database/preix.json'
  })
  const p = prefixdb.get(message.guild.id)
  let prefix;
  if (!p) prefix = "."
  else prefix = p
  if (message.content == "<@!850599629820002344>") message.channel.send(
    new MessageEmbed()
      .setDescription(`Hello ${message.member}, you ping me?\nThis server prefix is: ${prefixdb.get(message.guild.id) ? preifxdb.get(message.guild.id) : "."}`)
  )
  if (!message.content.startsWith(prefix)) {
    let aicb = db.fetch(`chatbot_${message.guild.id}`)
    if (message.channel.id == aicb) {
      try {
        const res = await axios.get(`http://api.brainshop.ai/get?bid=156727&key=GUo0Txov0dzluxq9&uid=1&msg=${encodeURIComponent(message.content)}`);
        message.channel.send(res.data.cnt)
      } catch (e) {
        message.channel.send('LMAO!LMAO!LMAO!Some error with AI ');
        message.channel.send("```" + e + "```")
      }
    } else return;
    //end
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
  const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
  try {
    if (command.dev) {
      if (message.author.id != "744831818632658944") return message.channel.send("Only Bot's Developer can use this command")
    }
  } catch (e) { }
  try {
    if (command.cooldown) {
      const timeout = command.cooldown * 1000;
      const cooldown = await db.fetch(`${command.name}_${message.guild.id}`);

      if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
        const time = ms(timeout - (Date.now() - cooldown));
        return message.channel.send(`Sorry you must wait **${time}** before using this command again!`);
      } else {
        db.set(`${command.name}_${message.guild.id}`, Date.now());
      }
    }
  } catch (e) { }
  try {
    if (command.perms) {
      for (const perm of command.perms) {
        try {
          if (!message.member.hasPermission(perm)) return message.channel.send(`You don't have permission to use this command! Need permission: \`${perm}\``)
          break;
        } catch (e) {
          console.log(`Permission ${perm} is invalid`)
        }
      }
    }
  } catch (e) { }
  if (command) {
    try {
      command.run(client, message, args);
    } catch (e) {
      message.channel.send(
        new MessageEmbed()
          .setTitle("Error")
          .addField("Command/Aliases", cmd)
          .addField("Type Error", typeof (e))
      )
    }
  }
});