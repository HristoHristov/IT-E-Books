var app = app || {};

app.model = (function(){
    var method,
        data,
        headers = app.requester.headers,
        bookOutputData = {
            books:[]
        },
        sessionTokenHeaders = JSON.parse(JSON.stringify(headers));

    function BookModel(url){
        this.url = url;
        this.requester = app.requester;


        bookOutputData.books.length = 0;
    }
    BookModel.prototype.addBook = function(title, author, isbn, file){
        var _this = this;
        try {
            var fileHeaders = JSON.parse(JSON.stringify(headers));
            fileHeaders["Content-Type"] = file.type;
            method = 'post';
            var defer = Q.defer();
            this.requester.makeRequest(method, 'files/' + file.name, fileHeaders, file).then(function (d) {
                var data = JSON.stringify({
                    'author': author,
                    'title': title,
                    'isbn': isbn,
                    'image': d.url
                });

                var bookHeader = JSON.parse(JSON.stringify(headers));
                bookHeader['X-Parse-Session-Token'] = sessionStorage['userToken'];
                _this.requester.makeRequest(method, _this.url, bookHeader, data).then(function (d2) {
                    defer.resolve(d2);
                }, function (err) {
                    defer.reject(err);
                })
            }, function (error) {
                defer.reject(error);
            }).done();
            return defer.promise;
        }
        catch(err) {
            if(err instanceof TypeError) {
                app.view.bookErrorMsg();
            }
        }
    }
    BookModel.prototype.getBook = function(){
        method = 'get';
        var defer = Q.defer();
        this.requester.makeRequest(method, this.url, headers, {}).then(
            function(inputData){
                inputData.results.forEach(function(book){
                    bookOutputData.books.push(book);
                })
                defer.resolve(bookOutputData);
            },
            function(err){
                defer.reject(err);
        }
        );
        return defer.promise;
    }
    BookModel.prototype.editBook = function(id, data){
        var defer = Q.defer();
        method = 'put';
        sessionTokenHeaders['X-Parse-Session-Token'] = sessionStorage['userToken'];
        var url = this.url + id;
        this.requester.makeRequest(method, url, sessionTokenHeaders, JSON.stringify(data)).then(function(d){
            defer.resolve(d);
        }, function(err){
            defer.reject(err);
        });
        return defer.promise;
    }
    BookModel.prototype.removeBook = function(id){
        var defer = Q.defer();
        method = 'delete';
        var url = this.url + id;
        sessionTokenHeaders['X-Parse-Session-Token'] = sessionStorage['userToken'];
        this.requester.makeRequest(method, url, sessionTokenHeaders, {}).then(function(success){
            defer.resolve(success)
        }, function(error){
            defer.reject(error);
        });
        return defer.promise;
    }
    return {
        BookModel: function(url){
            return new BookModel(url);
        }

    }
}());