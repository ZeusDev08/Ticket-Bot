module.exports = {
    name: 'delete',
    category: 'Ticket',
    description: 'Borra un ticket especifico',
    aliases: [],
    usage: 'delete',
    userperms: ['ADMINISTRATOR'],
    botperms: [],
    run: async(client, message, args) => {
        if (message.channel.name.includes('ticket-')) {
            message.channel.delete();
        } else {
            return message.reply('no puedes usar ese comando aquí, usa ese comando cuando tu borres el ticket!');
        }
    },
};