function newMessage() {
    var d = new Date(); // for now
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    var username = $("#username").text();
    console.log(username);
    var message = $("#messageArea").val();
    if($.trim(message) == '') {
        return false;
    }
    $('<div class="chatLineMassage"><div class="time">'+d.getHours()+':'+ d.getMinutes()+'</div><div class="username">' + username + ':</div><div class="messageText">' + message + '</div></div>').appendTo($('.channelMessages'));
    $('#messageArea').val('');
    var $cont = $('.channelMessages');
    $cont[0].scrollTop = $cont[0].scrollHeight;

};
$(window).on('keydown', function(e) {
    if (e.which == 13) {
        newMessage();
        return false;
    }
});
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
$('#login-btn').click(function () {
   $('.login-page').addClass("hidden");
   $('.frame').removeClass("hidden");
});