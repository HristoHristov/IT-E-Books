var app = app || {};

app.view = (function(){
    function HomePage(selector, data){
        $.get('scripts/templates/homePageTemplate.html', function(template){
            var html = Mustache.render(template, data);
            $('#wrapper').html(html);
            app.eventListener.bookEventListener();
        })
    }
    return{
        HomePage: function(selector, data){
            return new HomePage(selector, data);
        }
    }
}());