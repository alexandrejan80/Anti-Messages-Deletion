const Discord = require("discord.js")
const Personnes = require("../json/personnes.json")

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]})

async function trahir(message, action) {
    if (!message.content.match(/^s$/)) {
        if (message.author.id === "931711440732168273")
            await message.channel.send(message.content)
        else
            await message.channel.send(`Message ${action} ${Personnes[message.author.id]} : « ${message.content} »`)
    }
}

client.on('ready', () => console.log("Anti-Messages Deletion is connected !"))
client.login('OTMxNzExNDQwNzMyMTY4Mjcz.YeIZ5Q.TM-UxYFaomEuRriLNfhTge2ADcU')

client.on("messageUpdate", (oldMessage, newMessage) => {
    if (oldMessage.channel.type !== 'dm' && newMessage.content !== '' && newMessage.content !== oldMessage.content)
        trahir(oldMessage, "modifié").then(err => { if (err) throw err })
})

client.on("messageDelete", message =>  {
    if (message.channel.type !== 'dm' && message.content !== '')
        trahir(message, "supprimé").then(err => { if (err) throw err })
})