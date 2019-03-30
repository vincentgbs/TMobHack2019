// helper function
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

function getInput() {
    let value = ai.matchString($("#questionInput").val());
    $("#displayOptions").html(value);
}

$( document ).ready(function() {
    if ($_GET['query']) {
        $("#questionInput").val($_GET['query']);
        setTimeout(function(){
            getInput();
        },99);
    }

    $(document).on("keyup", '#questionInput', function(e) {
        getInput();
    });

    $(document).on("click", '.appt', function(e) {
        let reason = $(this).text();
        console.log(reason + ": We don't have access to the Tmobile documentation for this reason code");
    });
});
