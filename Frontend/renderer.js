// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var alerts = require('./more_js/alerts.js');

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
                    alerts.succ("Success", data.msg);
                    socket = socket(CONST.URI, {
                        query: "username=" + data.user.username
                    });
                    socket.username = data.user.username;
                    socket.colour = data.user.colour;
                    socket.channels = data.user.channels;
                    logged(data.user.username, data.user.colour, data.user.channels);
                    initSocket();
                } else {
                    alerts.err("Fail", data.msg);
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
                    alerts.succ("Success", data.msg);
                } else {
                    alerts.err("Fail", data.msg);
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
                if (data.success) {
                    console.log("NEW CHANNEL " + JSON.stringify(data));
                    newChannel(data.channel)
                    module.exports.newChannelAdded(data.channel);
                    module.exports.addUserToChannel(data.channel);
                } else {
                    alerts.err("Fail", data.msg);
                }
            })
            .fail(err => {
                alert(err.msg);
                console.log("channel creation failed " + err)
            })
    })

    $('#joinChannelBtn').click(() => {
        console.log("join channel triggered");
        $.post(CONST.URI + "/subForChannel", $('#joinChannel-form').serialize() + "&j_username=" + socket.username)
            .done(data => {
                if (!data.success) {
                    alerts.err("Fail", data.msg);
                } else {
                    alerts.succ("Success", data.msg)
                    newChannel(data.channel);
                    module.exports.addUserToChannel(data.channel);
                }
            })
            .fail(err => {
                console.log("channel join failed " + err)
            })
    })

    // socket.js


    function initSocket() {
        socket.emit('logged', {
            username: socket.username,
            colour: socket.colour,
            channels: socket.channels
        });

        var sendMessage = function(message) {
            console.log(message)
            socket.emit('new message', message);
        }

        socket.on('new message', (message) => {
            console.log(message);
            newMessage(message);
        })

        var newChannelAdded = function(data) {
            socket.emit('new channel', data);
        }

        var getCacheForChannel = function(channel) {
            socket.emit('request cache', channel);
        };

        socket.on('request cache', (cache) => {
            console.log("got requested cached messages")
            cache.messages.forEach((message) => {
                addMessage(message);
            })
            for (const prop in cache.online_users) {
                console.log("CACHED COLOUR " + cache.online_users[prop])
                addUserToChannelList({
                    username: prop,
                    colour: cache.online_users[prop],
                    channel: cache.channel_name
                })
            }
        })

        var getMsgForChannel = function(channel, numOfMsg, numToSkip) {
            console.log("MORE MSG REQ")
            socket.emit('request more msgs', {
                channel: channel,
                numOfMsg: numOfMsg,
                numToSkip: numToSkip
            });
        };

        socket.on('request more msgs', (messages) => {
            console.log("got requested messages")
            // call append function forEach
            messages.forEach((message) => {
                appendMessage(message);
            })
        })

        socket.on('test', () => {
            console.log("TEST");
        })

        var addUserToChannel = function(channel) {
            socket.channels.push(channel);
            socket.emit("user joined channel", {
                channel: channel,
                user: {
                    username: socket.username,
                    colour: socket.colour
                }
            })
        }

        socket.on('user joined channel', (data) => {
            console.log("USER JOINED " + data)
            addUserToChannelList({
                username: data.user.username,
                colour: data.user.colour,
                channel: data.channel.name,
            })
        })

        socket.on('user logged', (user) => {
            console.log("user logged " + user.username + " " + user.colour)
            if (user.channels.indexOf($('.channelTitle').text() !== -1)) {
                addUserToChannelList({
                    username: user.username,
                    colour: user.colour,
                    channel: $('.channelTitle').text(),
                })
            }
        })

        socket.on('user disconnected', (user) => {
            removeUserFromChannelList({
                username: user.username,
                channel: $('.channelTitle').text(),
            })
        })

        module.exports.sendMessage = sendMessage;
        module.exports.newChannelAdded = newChannelAdded;
        module.exports.getCacheForChannel = getCacheForChannel;
        module.exports.getMsgForChannel = getMsgForChannel;
        module.exports.addUserToChannel = addUserToChannel;
    }
})