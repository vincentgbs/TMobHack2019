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

    $(document).on('click', '#locationsButton', function() {
        $.getScript("js/locationspage.js", function() {
            console.log("loaded locationspage.js");
            return globalVariable.locationspage.render();
        });
    });

    $(document).on('click', '#williamsButton', function() {
        $.getScript("js/williamsstreetnearby.js", function() {
            console.log("loaded williamsstreetnearby.js");
            return globalVariable.williams.render();
        });
    });


});
