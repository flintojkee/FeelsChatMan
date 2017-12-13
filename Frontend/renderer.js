// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const swal = require('sweetalert');

const rq = require('electron-require');
const CONST = require('./more_js/constants.js');
var socket = require('socket.io-client');
const remote = require('electron').remote;
var twitch = require('twitch-emoji');

// require('./more_js/http.js')(CONST, socket)
//     .then((result) => {
//         require('./more_js/socket.js')(result)
//     })



$(document).ready(() => {
    console.log("document ready(http)");

    $('#login-btn').click(() => {
        console.log("login event triggered");
        $.post(CONST.URI + "/login", $('.login-form').serialize())
            .done(data => {
                console.log("done login request");
                // console.log(data);
                if (data.success) {
                    swal("Good job!",data.msg, "success");
                    socket = socket(CONST.URI, { query: "username=" + data.user.username});
                    socket.username = data.user.username;
                    logged(socket.username, data.user.colour);
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

    $('#addChannelBtn').click(() => {
        console.log("create channel triggered")
        //console.log($('#createChannel-form').serialize());
        if ($.trim($('#channelName')) === '') {
            alert("Empty channel name is not allowed");
            return false;
        }
        $.post(CONST.URI + "/createChannel", $('#createChannel-form').serialize() + "&c_admin=" + socket.username)
            .done(data => {
                console.log("NEW CHANNEL " + data);
                newChannel(data.channel)
                module.exports.newChannel(data.channel);
            })
            .fail(err => {
                console.log("channel creation failed " + err)
            })
    })


    // socket.js


    function initSocket() {
        socket.emit('logged', socket.username);

        var sendMessage = function(message) {
            console.log(message)
            socket.emit('new message', message);
        }

        socket.on('new message', (message) => {
            newMessage(message);
        })

        var newChannel = function(data) {
            socket.emit('new channel', data);
        }

        module.exports.sendMessage = sendMessage;
        module.exports.newChannel = newChannel;
    }
})