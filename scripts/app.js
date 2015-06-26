var app = app || {};
var bookModel = app.model.BookModel('classes/Books/');
var bookController = app.controller.BookController(bookModel);
app.bookController = bookController;
app.bookModel = bookModel;

(function(){
    var $ul = $('ul');
    var loginLogout;
    var $loginLogout = $('#login-logout a');
    if(sessionStorage.userToken){
        var $li = $('<li/>').attr('id', 'addBooks');
        var $a = $('<a/>').attr('href', '#/AddBook').text('Add Book');
        loginLogout = 'Logout';
        $li.append($a);
        $ul.append($li);
    } else{
        loginLogout = 'Login';
    }
    var userModel = app.model.userModel('User');
    var userController = app.controller.userController(userModel);
    app.userRegisterController = userController;
    var selector = '#wrapper'
    var sammyJSRouting = Sammy(function(){
        this.get('#/', function(){
            $loginLogout.text(loginLogout);
            bookController.getBook(selector);

        });
        this.get('#/AddBook', function(){
            app.view.addBookView(selector);
        });
        this.get('#/Register', function(){
           // userController.addUser();
            app.view.userRegister(selector);
        });
        this.get('#/Login', function(){
            if(loginLogout == 'Login'){
                app.view.userLoginView(selector);
            }
            else{
                userController.userLogout();
            }

        });
    });
    sammyJSRouting.run('#/')

}());
