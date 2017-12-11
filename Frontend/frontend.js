var renderer = require('./renderer.js');
function newMessage(newMessage) {
    if($.trim(newMessage.msg) === '') {
        return false;
    }
    var $new = $('<div class="chatLineMassage"><div class="time">'+ newMessage.date +'</div><div class="username">' + newMessage.username + ':</div><div class="messageText">'+( twitchEmoji.parse(newMessage.msg)+'</div></div>'));
    $('.channelMessages').append($new);
    $('#messageArea').val('');
    var $cont = $('.channelMessages');
    $cont[0].scrollTop = $cont[0].scrollHeight;

};
$(document).on('click',  '.channel', function(){
    console.log('1');
    $('.channel').removeAttr('id');
    $(this).attr('id','active');
    var title = jQuery(this).find('.name').text();

    $('.channelTitle').text(title);
});
function newChannel(newchannel){
    if($.trim(newchannel.name) === '') {
        return false;
    }
    var $new = $('<div class="channel"><div class="wrap"><img src="iha.png" alt=""/><div class="meta"><div class="name">'+ newchannel.name+'</div><div class="preview">'+ newchannel.description+'</div></div></div></div>');
    $('.channels').append($new);
};
$('#addChannelBtn').click(function(){
    var newchannel = {
        name:$("#channelName").val(),
        password:$("#channelPassword").val(),
        description:$("#channelDescription").val()
    };
    newChannel(newchannel);
});

$(window).on('keydown', function(e) {
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    if (e.which === 13) {
        var newmsg = {
            username:$("#username").text(),
            msg:$("#messageArea").val(),
            date:d.getHours()+':'+ d.getMinutes()
        };
        newMessage(newmsg);
        // Send to server
      //  renderer.sendMessage(newmsg);
        //

        return false;
    }
});

$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

var logged = function (username, colour){
   $('.login-page').addClass("hidden");
   $('.frame').find("#username").text(username);
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