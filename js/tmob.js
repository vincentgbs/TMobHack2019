var globalVariable = {}; // empty object
$(document).ready(function(){
    $.getScript("js/landingpage.js", function() {
        console.log("loaded landingpage.js");
        return globalVariable.landingpage.render();
    });
});
