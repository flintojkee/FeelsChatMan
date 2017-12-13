const swal = require('sweetalert');

var renderer = require('./renderer.js');
function newMessage(newMessage) {
    var username = getUser().name;
    mention(newMessage.msg,username);

    if ($(".channelTitle").text() !== newMessage.channel) {
        return false;
    }
    if ($.trim(newMessage.msg) === '') {
        return false;
    }
    var $new = $('<div class="chatLineMassage"><div class="time">' + newMessage.date + '</div><div class="username">' + newMessage.username + ':</div><div class="messageText">' + (twitchEmoji.parse(newMessage.msg) + '</div></div>'));
    $new.find(".username").addClass(newMessage.colour);
    $('.channelMessages').append($new);
    $('#messageArea').val('');
    var $cont = $('.channelMessages');
    $cont[0].scrollTop = $cont[0].scrollHeight;

};

$(document).on('click', '.channel', function() {
    $('.channel').removeAttr('id');
    $('.channelMessages').empty();
    $(this).attr('id', 'active');
    var title = jQuery(this).find('.name').text();
    $('.channelTitle').text(title);
});

function newChannel(newchannel) {
    if ($.trim(newchannel.name) === '') {
        return false;
    }
    var $new = $('<div class="channel"><div class="wrap"><img src="iha.png" alt=""/><div class="meta"><div class="name">' + newchannel.name + '</div><div class="preview">' + newchannel.description + '</div></div></div></div>');
    $('.channels').append($new);
};

$('#addChannelBtn').click(function() {
    var newchannel = {
        name: $("#channelName").val(),
        password: $("#channelPassword").val(),
        description: $("#channelDescription").val()
    };
    newChannel(newchannel);
});

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

var logged = function(username, colour) {
    $('.login-page').addClass("hidden");
    $('.frame').find("#username").text(username);
    var colour = "Firerick";
    $('.frame').find("#usernameColour").text(colour);
    $(".username").addClass(colour);
    $('.frame').removeClass("hidden");
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

function addUserToChannelList(username) {
    var $member = $(' <div class="member">' + username + '</div>');
    $member.appendTo('.channelMembers').show('slow');
}
function removeUserFromChannelList(username) {
    $(".channelMembers").each(function (username) {
        if(username===this.text())$(".channelMembers").remove(this);
    });
}
function mention(message,username) {
    console.log(username);
    var mention =  "@"+username;
    if(message.includes(mention)){
        console.log("mention");
        const notification = {
            title: 'Mention',
            body: message,
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


