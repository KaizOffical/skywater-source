const client = require('../index');
const data = require('simplest.db');
const db = new data({
  path: "./database/leveling.json"
})
/*
client.on("message", async (message) => {
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.guild.id === "883992683549429780") return;
  if(!db.get(`reqXp_${message.author.id}_${message.guild.id}`)) db.set(`reqXp_${message.author.id}_${message.guild.id}`, 100);
  if(!db.get(`level_${message.author.id}_${message.guild.id}`)) db.set(`level_${message.author.id}_${message.guild.id}`, 1);
  const reqXp = db.get(`reqXp_${message.author.id}_${message.guild.id}`);
  const xp = Math.floor(Math.random() * 5 + 1)
  db.number.add(`totalxp_${message.author.id}_${message.guild.id}`, xp);
  db.number.add(`xp_${message.author.id}_${message.guild.id}`, xp)
  const nowXp = db.get(`xp_${message.author.id}_${message.guild.id}`);
  if(!db.get(`level_${message.author.id}_${message.guild.id}`)) db.set(`level_${message.author.id}_${message.guild.id}`, 1);
  const lvl = db.get(`level_${message.author.id}_${message.guild.id}`);
  if(nowXp >= reqXp) {
    db.number.add(`level_${message.author.id}_${message.guild.id}`, 1);
    db.number.add(`xp_${message.author.id}_${message.guild.id}`, -reqXp);
    db.number.add(`reqXp_${message.author.id}_${message.guild.id}`, 100);
    message.channel.send(`Congratulations ${message.author}! You have now leveled up ${db.get(`level_${message.author.id}_${message.guild.id}`)}`);
  }
})
*/