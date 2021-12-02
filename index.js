const { Client, MessageEmbed, Util, Collection, MessageAttachment } = require('discord.js');
const Discord = require('discord.js')
const client = new Client();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const disbut = require('discord-buttons')(client);
const { token, OwnerID, prefix, cyan, green, red, CHANNEL_ID, SERVER_CHANNEL_ID } = require('./config.json');
const db = require('quick.db');
const { parse } = require('twemoji-parser');
const axios = require('axios');
const { readdirSync } = require('fs');
const fs = require('fs');
const mySecret = process.env['token']
const mongoDB = process.env['mongodb'];
const ms = require('ms');
const { GCommands } = require("gcommands")
const RSSParser = require("rss-parser")
const mongoose = require('mongoose')

module.exports = client;

const { GiveawaysManager } = require('discord-giveaways');
const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});

const cfg = require("./config.json");

client.giveawaysManager = manager;
client.request = new RSSParser();
client.events = new Collection();
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.categories = readdirSync("./commands")
client.config = cfg;

const keepAlive = require('./website/index.js');
keepAlive();

const mongoPath = cfg.mongo;
mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to mongoose!')
}).catch((err) => {
    console.log(err);
})

require('./handlers/command')(client);

client.login(cfg.token)