var root = $("#root"); // root div
var globalVariable = {}; // empty object
$(document).ready(function(){
    $.getScript("landingpage.js", function() { console.log("loaded landingpage.js"); });
    root.text(globalVariable.landingpage.render());
});
