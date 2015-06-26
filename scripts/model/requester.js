var app = app || {};

app.requester = (function(){
    var headers = {
        'X-Parse-Application-Id' : '9Im1A23WKZd5uj0stpTcEUxhBqlyFf6OdmiedLSw',
        'X-Parse-REST-API-Key' : 'XvFyDNkQdlyernMfn6qZcX3FfrvUs18v9JyWsVsB'
    };
    function parseQuery(method, dynamicUrl, headers, data){
        var url = 'https://api.parse.com/1/' + dynamicUrl;
        return makeRequest(method, url, headers, data);
    }
    function makeRequest(method, url, headers, data){
        var defer = Q.defer();
        $.ajax({
            method: method,
            headers: headers,
            data: data,
            url: url,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(d){
                defer.resolve(d);
            },
            error: function(error){
                defer.reject(error);
            }
        });
        return defer.promise;
    }
    return {
        makeRequest: function(method, dynamicUrl, headers, data){
            return new parseQuery(method, dynamicUrl, headers, data);
        },
        headers: headers
    }
}());