globalVariable.landingpage = {
        render: function() {
        $("body").css('background-image', 'url(assets/tmobilecity.jpg)');
        $("#root").html(`<br><br><br><h1 class="white-text">t-mobile</h1><br><br><br>
        <button class="btn btn-primary" id="startButton">Start</button>
        <br><br><br>
        <button class="btn btn-primary" id="locationsButton">Locations</button>
        <br><br><br>
        <button class="btn btn-primary" id="williamsButton">Williams Street</button>
        
        `);
    }
}
