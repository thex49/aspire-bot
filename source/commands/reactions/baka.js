const prototypes = require('../../util/prototypes');
const weeb = require('../../util/wrappers/weeb')
const Discord = require('discord.js');
module.exports = {
    name: 'baka',
    description: 'Позволяет вам оскорбить со баку которая вам не нравится',
    aliases: [],
    public: true,
    async execute(client, message, args, config, settings) {

        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
        user = client.user;
        user1 = message.author;
        }

        let image = await weeb('baka');
        let embed = new Discord.RichEmbed()
        .setTitle(`${user.username} обозвал ${user1.username}`)
        .setImage(image.url)
        .setColor(config.i)
        .setFooter('Credits to Weeb.sh')
        message.channel.send({embed: embed})
    }
}