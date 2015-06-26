var app = app || {};

app.view.loginErrorMsg = (function(){
    app.alertBox('Oops...!', 'Invalid Username or Password!', 'error', 2000, false, null, false);
})