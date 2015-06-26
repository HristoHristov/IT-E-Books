var app = app || {};

app.view.logoutErrMsg = (function(){
    app.alertBox('Oops...!', 'Sign Out Error!', 'error', 2000, false, null, false);
})