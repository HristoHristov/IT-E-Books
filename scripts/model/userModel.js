var app = app || {};

app.model.userModel = (function(){
    var method,
        data,
        headers = app.requester.headers;

    function User(url){
        this.url = url;
        this.requester = app.requester;
    }
    User.prototype.addUser = function(username, email, password){
        method = 'post';
        var defer = Q.defer();
        var data = JSON.stringify({
            'username': username,
            'password': password,
            'email': email
        });
        var _this = this;
        var url = 'users';
        this.requester.makeRequest(method, url, headers, data).then(function(success){
            var url = 'roles/qW0Jn72UDA';
            data = JSON.stringify({
                "users": {
                "__op": "AddRelation",
                    "objects": [
                    {
                        "__type": "Pointer",
                        "className": "_User",
                        "objectId": success.objectId
                    }
                ]
            }
            });
            _this.requester.makeRequest('put', url, headers, data).then(function(success){
                defer.resolve(success);
            }, function(err){
                defer.reject(err);
            })
        }, function(err){
            defer.reject(err);
        })
        return defer.promise;
    }

    User.prototype.userLogin = function(username, password){
        var url = 'login/?username=' + username + '&password=' + password;
        method = 'get';
        var defer = Q.defer()
        this.requester.makeRequest(method, url, headers, {}).then(function(success){
            sessionStorage['userToken'] = success.sessionToken;
            defer.resolve(success);
        }, function(err){
            defer.reject(err);
        });
        return defer.promise;
    }

    User.prototype.userLogout = function(){
        method = 'post';
        var url = 'logout';
        var defer = Q.defer();
        var logoutHeaders = JSON.parse(JSON.stringify(headers));;
        logoutHeaders['X-Parse-Session-Token'] = sessionStorage['userToken'];
        this.requester.makeRequest(method, url, logoutHeaders).then(function(success){
            defer.resolve(success);
            sessionStorage.clear();
        }, function(err){
            defer.reject(err);
        });
        return defer.promise;
    }
    return function(url){
        return new User(url);
    }
}())