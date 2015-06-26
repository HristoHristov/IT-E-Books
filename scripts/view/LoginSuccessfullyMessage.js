var app = app || {};

app.view.loginSuccessfully = (function(){
    app.alertBox('Congratulations!', 'Successfully Log In', 'success', 2000, false, null, false);
    setInterval(function(){
        location.assign('#/');
        location.reload(true);
    }, 1000);
})