module.exports = {
  name: "say",
  category: "utils",
  run: (client, message, args) => {
    const str = args.join(' ');
    if(!str) return message.channel.send('Please specify somethings to say')
    if (message.deletable) message.delete()
    message.channel.send(str)
  }
}