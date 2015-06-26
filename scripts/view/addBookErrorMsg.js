var app = app || {};

app.view.bookErrorMsg = (function(){
    $(document).ready(function(){
        app.alertBox('Oops...!', 'Please add valid data, or Log In system!', 'error', 2000, false, null, false);
    })
})