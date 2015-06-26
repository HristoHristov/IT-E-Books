var app = app || {};

app.eventListener.userLoginEvents = (function(){
    function userLoginEvents() {
        $('#form-btn').click(function () {
            var model = app.model.userModel('users');
            var userLoginController = app.controller.userController(model);
            userLoginController.userLogin();

        })
    }
    return function(){
        return new userLoginEvents();
    }
}())