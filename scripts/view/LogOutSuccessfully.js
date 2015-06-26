var app = app || {};

app.view.logOutSuccessfully = (function(){
    app.alertBox('Congratulations!', 'Successfully Log Out', 'success', 2000, false, null, false);
    setInterval(function(){
        location.assign('#/');
        location.reload(true);
    }, 1000);
})