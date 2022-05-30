module.exports = {
    name: 'open',
    category: 'Ticket',
    description: 'Re-abre un ticket.',
    aliases: [],
    usage: 'open',
    userperms: ['ADMINISTRATOR'],
    botperms: [],
    run: async(client, message, args) => {
        if (message.channel.name.includes('ticket-')) {
            const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
            try {
                message.channel.updateOverwrite(member.user, {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        READ_MESSAGE_HISTORY: true,
                    })
                    .then(() => {
                        message.channel.send(`Abierto Correctamente ${message.channel}`);
                    });
            } catch (e) {
                return message.channel.send('An error occurred, please try again!');
            }
        } else {
            return message.reply(
                'No puedes usar ese comando aquí usa el comando cuando cierres el ticket!',
            );
        }
    },
};