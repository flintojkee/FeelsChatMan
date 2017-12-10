function newMessage(newMessage) {
    if($.trim(newMessage.msg) === '') {
        return false;
    }
    var $new = $('<div class="chatLineMassage"><div class="time">'+ newMessage.date +'</div><div class="username">' + newMessage.username + ':</div><div class="messageText">' + newMessage.msg + '</div></div>');
    $('.channelMessages').append($new);
    $('#messageArea').val('');
    var $cont = $('.channelMessages');
    $cont[0].scrollTop = $cont[0].scrollHeight;

};
$('.channel').click(function(){
    $('.channel').removeAttr('id');
    $(this).attr('id','active');
    var title = jQuery(this).find('.name').text();

    $('.channelTitle').text(title);
});
$('.addChannel').click(function() {
}
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