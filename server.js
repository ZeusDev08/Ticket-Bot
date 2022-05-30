const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('EL BOT ESTA LISTO')
});

function keepAlive() {
    server.listen(0909, () => {
        console.log('Servidor Listo!')
    })
}

module.exports = keepAlive;