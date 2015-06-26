var app = app || {};

app.alertBox = function sweetAlertMsg(title, text, type, timer, showCancelButton, confirmButtonText, closeOnConfirm, closeOnCancel, animation, inputPlaceholder, func ){
    swal({
        title: title,
        text: text,
        type: type,
        timer: timer,
        showCancelButton: showCancelButton,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: confirmButtonText,
        closeOnConfirm: closeOnConfirm,
        closeOnCancel:closeOnCancel,
        animation: animation,
        inputPlaceholder: inputPlaceholder
    }, func);
};
app.view.bookSuccessfullyAdded = (function(){
    app.alertBox('Congratulations!', 'Book successfully added', 'success', 2000, false, null, false);
})