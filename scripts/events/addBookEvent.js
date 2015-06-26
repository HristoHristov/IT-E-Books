var app = app || {};

app.eventListener.addBook = function(){
    $('#fileselect').change(function(e) {
        var files = e.target.files || e.dataTransfer.files;
        app.file = files[0];
    });
    var addBokButton = $('.add-book');
    addBokButton.click(function(event){
        app.bookController.addBook();
    });
}