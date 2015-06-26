var app = app || {};

app.view.bookRemovedSuccessfully = (function(){
    app.alertBox('Congratulations', 'Successfully removed', 'success', 2000, false, null, false);
    setInterval(function(){
        location.assign('#/');
        location.reload(true);
    }, 1000);
})