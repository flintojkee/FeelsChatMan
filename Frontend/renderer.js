// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const rq = require('electron-require');
const CONST = require('./more_js/constants.js');
var socket = require('socket.io-client');
const remote = require('electron').remote;
// require('./more_js/http.js')(CONST, socket)
//     .then((result) => {
//         require('./more_js/socket.js')(result)
//     })



// http.js


$(document).ready(() => {
    console.log("document ready(http)");
$('#login-btn').click(() => {
    console.log("login event triggered");
$.post(CONST.URI + "/login", $('.login-form').serialize())
    .done(data => {
    console.log("done login request");
// console.log(data);
if (data.success) {
    alert(data.msg);
    socket = socket(CONST.URI);
    socket.username = data.user.username;
    logged(socket.username);
    initSocket();
} else {
    alert(data.msg);
}
return false;
})
.fail((err) => {
    console.log("fail login request");
alert("Status code: " + err.status)
})
});

$('#register-btn').click(() => {
    console.log("register event triggered")
$.post(CONST.URI + "/register", $('.register-form').serialize())
    .done(data => {
    console.log("done register request")
if (data.success) {
    //TODO some UI action(?)
    alert(data.msg);
} else {
    alert(data.msg);
}
return false;
})
.fail(err => {
    console.log("fail register request");
//TODO reg fail message
})
})


// socket.js


function initSocket() {
    socket.emit('logged', socket.username);

    function sendMessage(message) {
        socket.emit('send message', message);
    }
}
})