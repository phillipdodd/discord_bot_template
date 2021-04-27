module.exports = function (msg, args) {
    try {
        msg.channel.send('pong');
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}