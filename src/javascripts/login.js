let error = ''
$('#submit').tap(function () {
    let phone = $("#phone").val();
    let textcode = $("#textcode").val();
    let msgcode = $('#msgcode').val();
    if (phone == '' || phone == null) {
        error = '请输入手机号码';
        success();
    } else if (!(/^1[34578]\d{9}$/.test(phone))) {
        error = '手机格式不正确';
        success();
    } else if(textcode == '' || textcode == null) {
        error = '请输入图片验证';
        success();
    } else if (textcode.length > 4 || textcode.length < 1) {
        error = '图片验证不正确';
        success();
    } else if (msgcode == '' || msgcode == null) {
        error = '请输入短信验证';
        success();
    } else if (msgcode.length > 4 || msgcode.length < 1) {
        error = '短信验证不正确';
        success();
    } else {
        location.href = "/#/home";
    }
})
const success = () => {
    $(".login-error-info").html(error);
    $(".login-error").fadeIn();
    setTimeout(() => {
        $(".login-error").fadeOut()
    }, 3000)
     return false;
}