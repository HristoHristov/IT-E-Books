var app = app || {};

app.view.bookRemoveErr = (function(){
    app.alertBox('Oops...!', 'Remove error', 'error', 2000, false, null, false);
})