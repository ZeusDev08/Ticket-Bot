const { readdirSync, readdir } = require('fs')

module.exports = (client) => {
    readdir('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

        commands.forEach((file) => {
            const pull = require(`../commands/${dir}/${file}`);
            client.commands.set(pull.name, pull);
            pull.aliases.forEach(alias => {
                client.aliases.set(alias, pull.name);
            });
        });
    });
    console.log('CARGANDO COMANDOS...');
    console.log(`Cargados correctamente ${client.commands.size} comandos`)
};