var app = app || {};

app.eventListener.userRegister = (function(){
    $('button').click(function(){
        app.userRegisterController.addUser();
    })
})