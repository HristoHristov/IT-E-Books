var app = app || {};

app.controller = (function(){
    function BookController(model){
        this._model = model;
    }
    BookController.prototype.getBook = function(selector){
        this._model.getBook().then(function(data){
            app.view.HomePage('#wrapper', data);

        });

    }
    app.file;

    BookController.prototype.addBook = function(inputData){
        var title = $('[name="title"]').val();
        var author = $('[name="author"]').val();
        var isbn = $('[name="isbn"]').val();
        this._model.addBook(title, author, isbn, app.file).then(function(){
            app.view.bookSuccessfullyAdded();
        }, function(){
            app.view.bookErrorMsg();
        })
    }
    BookController.prototype.editBook = function edit(id){
        var splitElement = id.split('_');
        var id = splitElement[1];
        var data = {};
        var _this = this;
        var keys = ['title', 'author', 'isbn'];
        var editMsg = ['Are you sure edit title', 'Are you sure edit author', 'Are you sure edit isbn'];
        function checkInputValue(inputValue){
            if (inputValue === false){
                return false;
            }
            if (inputValue === "") {
                swal.showInputError("You need to write something!");     return false
            }
        }
        app.alertBox("Books", 'Enter a Title', "input", null, true, null, false, true, "slide-from-top", null,
            function(inputValue){
                checkInputValue(inputValue);
                data['title'] = inputValue;

                app.alertBox("Books", "Enter a Author", "input", null, true, null, false, true, "slide-from-top", null,
                    function(inputValue){
                        checkInputValue(inputValue);
                        data['author'] = inputValue;

                        app.alertBox("Books", "Enter a ISBN", "input", null, true, null, false, true, "slide-from-top", null,
                            function(inputValue){
                                checkInputValue(inputValue);
                                data['isbn'] = inputValue;

                                if(Object.getOwnPropertyNames(data).length !== 0){
                                    _this._model.editBook(id, data).then(function(d){
                                        app.view.bookEditedSuccessfully();
                                    }, function(err){
                                        app.view.bookEditedErrorMsg();
                                    });
                                }
                                else{
                                    app.view.bookEditedErrorMsg();
                                }
                            });
                    });
            });
    }
    BookController.prototype.removeBook = function(inputId){
        var splitElement = inputId.split('_');
        var id = splitElement[1];
        var _this = this;
        app.alertBox("Are you sure?", "You will not be able to recover this imaginary file!", 'warning', null, true, "Yes, delete it!", false, false, null, null,
            function(isConfirm){
                if (isConfirm) {
                    _this._model.removeBook(id).then(function(d){
                        app.view.bookRemovedSuccessfully();
                    }, function(err){
                        app.view.bookRemoveErr();
                    })
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            }
        );
    }

    return {
        BookController: function(model){
            return new BookController(model);
        }
    };

}());
