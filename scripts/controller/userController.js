var app = app || {};

app.controller.userController = (function(){
    function User(model){
        this.model = model
    }
    User.prototype.addUser = function(){
        var $username = $('[name="username"]').val();
        var $password = $('[name="password"]').val();
        var $email = $('[name="email"]').val();
        var $repeatPass = $('[name="repeat-pass"]').val();
        this.model.addUser($username, $email, $password, $repeatPass).then(function(){
            app.view.registerSuccessfullyMsg();
        }, function(){
            app.view.registerErrorMsg()
        })
    }
    User.prototype.userLogin = function(){
        var $username = $('[name="username"]').val();
        var $password = $('[name="password"]').val();
        this.model.userLogin($username, $password).then(function(success){
            app.view.loginSuccessfully();
        }, function(err){
            app.view.loginErrorMsg();

        });
    }
    User.prototype.userLogout = function(){
        this.model.userLogout().then(function(success){
            app.view.logOutSuccessfully();
        }, function(err){
            app.view.logoutErrMsg();
            sessionStorage.clear();
        });
    }
    return function(model){
        return new User(model);
    }
}())