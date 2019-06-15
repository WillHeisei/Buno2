const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const colour = require("../../colours.json")

module.exports.run = async (bot, message, args) => {
    let shout = args.join(" ").slice(0);
    
    let noPerms = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("You do not have sufficient permissions to execute this command.")
    .setColor("#ffc900")
    .setTimestamp()

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noPerms)

    let announceEmbed = new Discord.RichEmbed()
    .setDescription(`Announced by: ${message.author}\n\n ${shout}`)
    .setColor(colour.yellowish)
    .setTimestamp()
    .setFooter("Buno's Italian Restaurant", bot.user.displayAvatarURL)

    let noChannel = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Couldn't find an **announcements** channel.")
    .setColor(colour.yellowish)
    .setTimestamp();
    .setFooter("Buno's Italian Restaurant", bot.user.displayAvatarURL)
    let announcementChannel = message.guild.channels.find(n => n.name === "announcements");
    if(!announcementChannel) message.channel.send({embed: noChannel});
    announcementChannel.send(`@here`, announceEmbed);
  
    
}

module.exports.config = {
    name: "announce",
    aliases: ["shout"],
    usage: "-announce <message>",
    description: `Announces your message in the #announcements channel.`,
    accessableby: ["Moderator", " Crown Prince", " His Majesty Emperor of Japan"]
}