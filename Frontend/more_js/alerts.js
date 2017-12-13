const swal = require('sweetalert');

var succ= function (b_text, s_text) {
    swal(b_text,s_text, "success");
};

var err= function (b_text, s_text) {
    swal(b_text,s_text, "error");
};

var warn= function (b_text, s_text) {
    swal(b_text,s_text, "warning");
};

var info= function (b_text, s_text) {
    swal(b_text,s_text, "info");
};

module.exports.succ = succ;
module.exports.err = err;
module.exports.warn = warn;
module.exports.info = info;