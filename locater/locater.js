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
    </div>`
            );
        }, // end render
        findClosest: function(lat, lng, count=3) {
            // rank distances of stores from current location
            var R = 6371; // radius of earth in km
            var distances = {};
            var closest = -1;
            for( i = 0 ; i < markers.length; i++ ) {
                var mlat = markers[i].lat;
                var mlng = markers[i].lng;
                var dLat  = rad(mlat - lat);
                var dLong = rad(mlng - lng);
                var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c;
                distances[i] = d;
                if ( closest == -1 || d < distances[closest] ) {
                    closest = i;
                }
            }
            console.debug(distances);
            var stores = [];
            // add count of closest stores
            for ( i = 0; i < count; i++) {
                stores.push(distances[i]);
            }
            return stores;
        } // end findClosest
    } // end locationspage
}

// helper function
function rad(x) {return x*Math.PI/180;}

$(document).ready(function(){
    let test = globalVariable.locationspage.findClosest(33.7979885, -84.3694475);
    globalVariable.locationspage.render(test);
});