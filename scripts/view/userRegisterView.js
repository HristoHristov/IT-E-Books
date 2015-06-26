var app = app || {};

app.view.userRegister = (function(){
    function UserRegisterView(selector) {
        $.get('scripts/templates/userRegisterTemplate.html', function (template) {
            var html = Mustache.render(template);
            $(selector).html(html);
            app.eventListener.userRegister();
        })
    }
    return function(selector){
        return new UserRegisterView(    selector);
    }
}())