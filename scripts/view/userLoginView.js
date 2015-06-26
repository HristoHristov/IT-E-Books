var app = app || {};

app.view.userLoginView = (function(){
    function userLoginView(selector){
        $.get('scripts/templates/userLoginTemplate.html', function(template){
            var html = Mustache.render(template);
            $(selector).html(html);
            app.eventListener.userLoginEvents();
        })
    }
    return function(selector){
        return new userLoginView(selector);
    }
}())