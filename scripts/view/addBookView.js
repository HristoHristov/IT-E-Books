var app = app || {};
app.view.addBookView = (function(selector){
    $.get('scripts/templates/addBookTemplate.html', function(template){
        var html = Mustache.render(template);
        $(selector).html(html);
        app.eventListener.addBook();
    });
})