const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")
const images = require("../../image.json")

module.exports.run = async (bot, message, args) => {
    let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor("#ff0000")
    .setTimestamp()
    if(message.author.id != "537650223988604938") return message.channel.send(noPerms)

    let importantEmbed = new Discord.RichEmbed()
    .setTitle(":BUNO: **Important Links** :BUNO:")
    .setDescription(`\n**[Main Group](https://www.roblox.com/groups/4890899/Bunos#!/about)**\n**[Discord Link]https://discord.gg/qp62mzn)`)
    .setColor(colour.grey)
    .setThumbnail(message.guild.iconURL)
    
    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **important-links** channel.")
    .setColor(colour.red)
    .setTimestamp();
    let importantChannel = message.guild.channels.find(n => n.name === "important-links");
    if(!importantChannel) message.channel.send({embed : noChannel})
    importantChannel.send({embed : importantEmbed})


}

module.exports.config = {
    name: "links",
    aliases: ["il"],
    description: "Important links.",
    accessableby: "Bot owner"
}