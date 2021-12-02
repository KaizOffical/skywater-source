const client = require('../index')
const { GCommands } = require("gcommands")

client.on('ready', () => {
  console.log(`[ LOGIN ] Logged in as ${client.user.tag}!`);

  const arrayStatus = [
    `${client.guilds.cache.size} servers | .help`,
    `My prefix is .`,
    `with ${client.guilds.cache.size} servers | ${client.users.cache.size} users | ${client.channels.cache.size} channels`,
    `Created by Discord.JS`
  ]
  let index = 0;
  setInterval(() => {
    if(index==arrayStatus.length) index = 0;
    const status = arrayStatus[index];
    client.user.setActivity(status);
    index++
  }, 7000)

  const gc = new GCommands(client, {
    cmdDir: "./slash/",
    language: "english",
    slash: {
      slash: "both",
      prefix: "."
    }
  })

  gc.on("log", console.log)
  gc.on("debug", console.log)
})