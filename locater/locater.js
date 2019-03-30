globalVariable = {
    locationspage: {
        render: function(loc) {
            $("body").css('background-image', '');
            $("#root").html(
                `<h1>Locations</h1>
            <!-- <input type="text" id="locationsInput"> -->
            <hr>
            </div>
            <div class="container">
      <h2>Locations</h2>
      <p>Find a T-Mobile store near you</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Address</th>
            <th>Distance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>`+loc[0].name+`</td>
            <td>`+loc[0].address+`</td>
            <td>`+(loc[0].distance?loc[0].distance:0.38)+` miles</td>
            <td><a href="gps?lat=`+loc[0].lat+`&lng=`+loc[0].lng+`"><button class="btn btn-primary">Check-in</button></a></td>
          </tr>
          <tr>
            <td>`+loc[1].name+`</td>
            <td>`+loc[1].address+`</td>
            <td>`+(loc[1].distance?loc[1].distance:0.62)+` miles</td>
            <td><a href="gps?lat=`+loc[1].lat+`&lng=`+loc[1].lng+`"><button class="btn btn-primary">Check-in</button></a></td>
          </tr>
          <tr>
            <td>`+loc[2].name+`</td>
            <td>`+loc[2].address+`</td>
            <td>`+(loc[2].distance?loc[2].distance:1.82)+` miles</td>
            <td><a href="gps?lat=`+loc[2].lat+`&lng=`+loc[2].lng+`"><button class="btn btn-primary">Check-in</button></a></td>
          </tr>
        </tbody>
      </table>
    </div>
            `
            );
        }
    }
}
$(document).ready(function(){
    globalVariable.locationspage.render(markers);
});
