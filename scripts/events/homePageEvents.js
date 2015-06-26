var app = app || {};

app.eventListener = (function(){

    function bookEventListener(){
            var edit = $('.edit');
            var remove = $('.remove');

            edit.click(function(event){
                var id = event.target.id;
                app.bookController.editBook(id);
            });
        remove.click(function(event){
            var id = event.target.id;
            app.bookController.removeBook(id);
        })




    }

    return {
        bookEventListener: function(){
            return new bookEventListener();
        }
    }
}());