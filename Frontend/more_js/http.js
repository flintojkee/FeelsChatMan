module.exports = (CONST, socket) => {
    return new Promise((resolve, reject) => {
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
                            logged();
                            resolve(socket);
                        } else {
                            alert(data.msg);
                        }
                        return false;
                    })
                    .fail(err => {
                        console.log("fail login request");
                        //TODO loggin fail message
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
        })
    })
}