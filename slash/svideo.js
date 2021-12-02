const { SlashCommand } = require("gcommands"),
    config = require("../config.json")

module.exports = (async () => {
    return {
        name: "video",
        description: "Shows lateset video of KaizOffical youtube channel",
        run: async({client, respond}, args) => {
            let req = (await client.request.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=UCcquRONkQW3jjDCEv3l0Ehg`)).items[0]
    
            respond({
                content: `Lateset video of KaizOffical is: {url}`.replace("{url}", req.link),
                ephemeral: true
            })
        }
    }
})();