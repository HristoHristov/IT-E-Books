var app = app || {};

app.view.registerErrorMsg = (function(){
    $(document).ready(function(){
        app.alertBox('Oops...!', 'Invalid arguments or user already exists!', 'error', 2000, false, null, false);
    })
})