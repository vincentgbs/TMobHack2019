var globalVariable = {}; // empty object
$(document).ready(function(){
    $.getScript("js/landingpage.js", function() {
        console.log("loaded landingpage.js");
        return globalVariable.landingpage.render();
    });

    $(document).on('click', '#startButton', function() {
        $.getScript("js/question.js", function() {
            console.log("loaded question.js");
            return globalVariable.questionpage.render();
        });
    });
    $(document).on("keypress", '#questionInput', function(e) {
        globalVariable.questionpage.getInput();
    });

});
