const swal = require('sweetalert');

var renderer = require('./renderer.js');
function newMessage(newMessage) {
    var username = getUser().name;
    newMessage.mention = false;
    mention(newMessage,username);

    console.log(newMessage.mention);
    if ($(".channelTitle").text() !== newMessage.channel) {
        return false;
    }
    if ($.trim(newMessage.msg) === '') {
        return false;
    }
    addMessage(newMessage);

};

function addMessage(message) {
    gachiBass(message);
    var $new = $('<div class="chatLineMassage"><div class="time">' + message.date + '</div><div class="username">' + message.username + ':</div><div class="messageText">' + (twitchEmoji.parse(message.msg) + '</div></div>'));
    $new.find(".username").addClass(message.colour);
    console.log(message.username);
    console.log(message.colour);
    console.log(message.mention);
    if(message.mention){
        $new.find(".messageText").addClass("mention");
    }
    $('.channelMessages').append($new);

    var $cont = $('.channelMessages');
    $cont[0].scrollTop = $cont[0].scrollHeight;
}

function appendMessage(message) {
    var $new = $('<div class="chatLineMassage"><div class="time">' + message.date + '</div><div class="username">' + message.username + ':</div><div class="messageText">' + (twitchEmoji.parse(message.msg) + '</div></div>'));
    $new.find(".username").addClass(message.colour);
    $('.channelMessages').prepend($new);
}


$(document).on('click', '.channel', function() {
    $('.channel').removeAttr('id');
    $('.channelMessages').empty();
    $(".channelMembers").empty();
    $(".mainPanel").removeClass("hidden");
    $(".rightPanel").removeClass("hidden");
    $(this).attr('id', 'active');
    var title = jQuery(this).find('.name').text();
    $('.channelTitle').text(title);
    renderer.getCacheForChannel(title);
});

function newChannel(newchannel) {
    if ($.trim(newchannel.name) === '') {
        return false;
    }
    var $new = $('<div class="channel"><div class="wrap"><div class="img">' + newchannel.name.charAt(0) + '</div><div class="meta"><div class="name">' + newchannel.name + '</div><div class="preview">' + newchannel.desc + '</div></div></div></div>');
    $('.channels').append($new);
};


$(window).on('keydown', function(e) {
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    if (e.which === 13) {
        var newmsg = {
            channel: $(".channelTitle").text(),
            username: getUser().name,
            msg: $("#messageArea").val(),
            date: d.getHours() + ':' + d.getMinutes(),
            colour:getUser().colour
        };
        if ($.trim(newmsg.msg) === '') {
            return false;
        }
        newMessage(newmsg);
        $('#messageArea').val('');
        // Send to server
        renderer.sendMessage(newmsg);
        //

        return false;
    }
});

$('.message a').click(function() {
    $('form').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});

$('#colourpicker').change(() => {
    $('#r_colour').val($('#colourpicker').val());
});

// Added new param
var logged = function(username, colour, channels) {
    console.log("logged func" +username + colour + channels)
    $('.login-page').addClass("hidden");
    $('.frame').find("#username").text(username);
    $('.frame').find("#usernameColour").text(colour);
    $(".username").addClass(colour);
    $('.frame').removeClass("hidden");

    // Add all the joined channels
    channels.forEach(channel => {
        console.log("+ch")
        newChannel(channel);
    })
};

const remote = require('electron').remote;

$("#minimize").click(() => {
    var window = remote.getCurrentWindow();
    window.minimize();
})

$("#expand").click(() => {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
})

$("#close").click(() => {
    var window = remote.getCurrentWindow();
    window.close();
})

$("#changeColorBtn").click(() => {
    var newColour = $("#changeColourPicker").val();
    var prevColour = $("#usernameColour").text();
    $('.frame').find("#usernameColour").text(newColour);
    $('.profile').find(".username").removeClass(prevColour);
    $('.profile').find(".username").addClass(newColour);
});

function addUserToChannelList(user) {
    if ($(".channelTitle").text() !== user.channel) {
        return false;
    }
    var $member = $('<div class="member '  + user.colour + '" id="' + user.username + '">' + user.username + '</div>');
    $member.appendTo('.channelMembers').show('slow');
}
function removeUserFromChannelList(user) {
    if ($(".channelTitle").text() !== user.channel) {
        return false;
    }
    var mem = document.getElementById(user.username);
    mem.remove();
}

const path = require('path');
function mention(message,username) {
    var mention =  "@"+username;

    if(message.msg.includes(mention)){
        message.mention = true;
        const notification = {
            title: 'Mention',
            body: message.msg,
            icon: path.join(__dirname, 'images/feelsgoodman.png')
        }
        const myNotification = new window.Notification(notification.title, notification);
    };
}

function getUser() {
    var User = {
        name:$('.frame').find("#username").text(),
        colour:$('.frame').find("#usernameColour").text()
    };
    return User;
}

function gachiBass(message) {
    var gachiBass = "gachiBASS";
    var str = message.msg;
    var replace = '<img src=\"images/gachiBass.gif\">';
    console.log(message.msg);
    if(str.includes(gachiBass)){
        console.log(str);
        message.msg = replaceAll(str,gachiBass,replace);
        console.log(message.msg);
    };
}
function replaceAll(str, term, replacement) {
    return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}
function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

$("#showMoreMessages").click(() => {
    console.log("TOTAL MSGS " + $('.channelMessages').children().length)
    renderer.getMsgForChannel($(".channelTitle").text(), 20, $('.channelMessages').children().length)
});
