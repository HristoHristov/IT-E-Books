var app = app || {};

app.view.bookEditedSuccessfully = (function(){
    app.alertBox('Congratulations', 'successfully edited', 'success', 2000, false, null, false);
    setInterval(function(){
        location.assign('#/');
        location.reload(true);
    }, 1000);
});