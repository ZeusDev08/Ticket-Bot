const { MessageEmbed, version: djsversion } = require('discord.js');
const { formatBytes, parseDur } = require('../../functions.js');
const cpuStat = require('cpu-stat');
const { BOT_OWNER } = process.env;
const moment = require('moment');
const os = require('os');

const formatOS = {
    aix: 'IBM AIX',
    darwin: 'Darwin',
    freebsd: 'FreeBSD',
    linux: 'Linux',
    openbsd: 'OpenBSD',
    sunos: 'SunOS',
    win32: 'Windows',
};

module.exports = {
    name: 'botinfo',
    category: 'Info',
    description: 'Descripciรณn del bot',
    aliases: ['bot', 'bi'],
    usage: 'botinfo',
    userperms: [],
    botperms: ['USE_EXTERNAL_EMOJIS'],
    run: async(client, message, args) => {
        cpuStat.usagePercent(function(error, percent, seconds) {
            if (error) {
                return console.log(error);
            }

            const embed = new MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setColor(message.guild.members.cache.get(client.user.id).displayHexColor)
                .setFooter(`Requested by ${message.author.tag} `)
                .setTimestamp()
                .setTitle('Bot Information')
                .addField('<:documents:773950876347793449> General โฏ', [
                    `> **<:card:773965449402646549> Bot Name: \`${client.user.tag}\`**`,
                    `> **\\๐ Bot ID: \`${client.user.id}\`**`,
                    `> **\\๐ Bot Owner: \`${client.users.cache.get(BOT_OWNER).tag}\`**`,
                    `> **\\๐ Servers: \`${client.guilds.cache.size.toLocaleString()}\` Servers**`,
                    `> **\\๐ฅ Users: \`${client.users.cache.size.toLocaleString()}\` Users**`,
                    `> **\\๐บ Channels: \`${client.channels.cache.size.toLocaleString()}\` Channels**`,
                    `> **\\๐ฌ Commands: \`${client.commands.size}\` Commands**`,
                    `> **\\๐ Created: \`${moment(client.user.createdTimestamp).format('MMMM Do YYYY, h:mm:ss')}\` | \`${Math.floor((Date.now() - client.user.createdTimestamp) / 86400000)}\` day(s) ago**`,
                    '\u200b',
                ]);
            message.channel.send(embed);
        });
    },
};