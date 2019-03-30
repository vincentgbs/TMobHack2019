$(document).ready(function(){
    $("#goodbye").on('click', function(){
        if ($("#welcomeMessage").text() == 'Hello') {
            $("#welcomeMessage").text('Goodbye');
        } else {
            $("#welcomeMessage").text('Hello');
        }
    });
});
