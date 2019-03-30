var globalVariable = {}; // empty object
$(document).ready(function(){
    $.getScript("js/landingpage.js", function() {
        console.log("loaded landingpage.js");
        return globalVariable.landingpage.render();
    });

    $(document).on('click', '#locationsButton', function() {
        $.getScript("js/locationspage.js", function() {
            console.log("loaded locationspage.js");
            return globalVariable.locationspage.render();
        });
    });

});
