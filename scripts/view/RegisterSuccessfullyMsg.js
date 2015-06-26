var app = app || {};

app.view.registerSuccessfullyMsg = (function(){
    $(document).ready(function(){
        app.alertBox('Congratulations!', 'You have registered successfully', 'success', 2000, false, null, false);
        setInterval(function(){
            location.assign('#/Login');
            location.reload(true)
        }, 1000);
    })
})