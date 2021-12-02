const db = require('quick.db')

module.exports = {
  name: "buy",
  category: "economy",
  run: async (client, message, args) => {
    const id = args[0];
    const a = args[1]
    if(isNaN(a) && a) return message.channel.send("Amount of item is invalid")
    let amount;
    if(!a) amount = 1
    else amount = a
    const bal = db.get(`cash_${message.author.id}`)
    if(!id) return message.channel.send("Please specify id of item")
    if (id == "001") {
      const cost = 100 * amount;
      if(bal < cost) return message.channel.send(`You don't have enough money to buy ${amount} fishing pole(s)`)
      db.add(`fishingpole_${message.author.id}`, amount)
      db.add(`cash_${message.author.id}`, -cost)
      message.channel.send(`You bought ${amount} fishing pole(s) with ${cost} money`)
    } else if(id == "002") {
      const cost = 100 * amount;
      if(bal < cost) return message.channel.send(`You don't have enough money to buy ${amount} gun(s)`)
      db.add(`gun_${message.author.id}`, amount)
      db.add(`cash_${message.author.id}`, -cost)
      message.channel.send(`You bought ${amount} gun(s) with ${cost} money`)
    } else if(id == '003') {
      const cost = 10 * amount;
      if(bal < cost) return message.channel.send(`You don't have enough money to buy ${amount} cookie(s)`)
      db.add(`cookie_${message.author.id}`, amount)
      db.add(`cash_${message.author.id}`, -cost)
      message.channel.send(`You bought ${amount} cookie(s) with ${cost} money`)
    } else return message.channel.send("That item id is invalid")
  }
}