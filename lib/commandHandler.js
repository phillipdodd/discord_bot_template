const ping = require('../commands/ping');

const commands = { ping };
const permittedChannels = {};

module.exports = async function (msg) {
    try {
        if (permittedChannels[msg.channel.id]) {
            const tokens = msg.content.split(" ");
            const command = tokens.shift();
            if (command.charAt(0) === prefix) {
                command = command.substring(1);
                commands[command](msg, tokens);
            }
        } else {
            console.log(`Invalid channel: ${msg.channel.id}`);
        }
    } catch (err) {
        console.error(`commandHandler: ${err.message}`);
        throw err;
    }
}