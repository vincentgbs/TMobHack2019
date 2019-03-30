globalVariable.questionpage = {
    render: function() {
        $("body").css('background-image', '');
        $("#root").html('<br><br><br><br><h1>What can I help you with?</h1><input type="text" id="questionInput"><hr><div id="displayOptions"></div>');
    },
    getInput: function() {
        $("#displayOptions").text($("#questionInput").val());
    }
}
