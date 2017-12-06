module.exports = (socket) => {
    $(document).ready(() => {
        socket.emit('logged', socket.username);

        function sendMessage(message) {
        	socket.emit('send message', message)
        }
    })
}