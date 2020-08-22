const Discord = require("discord.js")
const mySql = require("mysql")

const bot = new Discord.Client()
const TOKEN = ""

const PREFIX = "$"

var connection = mySql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
})

bot.on("ready", function(message) {
    console.log("Status >> Online")
})

bot.on("message", function(message) {
    if (!message.content.startsWith(PREFIX)) return
    var args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]) {
        case "query":
            var q = args.slice(1).join(" ")
            message.channel.send(`Running query ${q}`)
            connection.query(q, function(error, results, fields) {
                if (error) {
                    throw error
                    message.channel.send(`Query threw error\n ${error}`)
                }
            })
    }
})

bot.login(TOKEN)
