globalVariable = {
    locationspage: {
        populateStores: function(locations){
            var closestStores = '';
            let locKeys = Object.keys(locations);
            for(i = 0; i < locKeys.length; i++) {
                closestStores += `<tr>
                  <td>`+locations[locKeys[i]].name+`</td>
                  <td>`+locations[locKeys[i]].address+`</td>
                  <td>`+(locations[locKeys[i]].distance)+` miles</td>
                  <td><a href="../gps?lat=`+locations[locKeys[i]].lat+`&lng=`+locations[locKeys[i]].lng+`"><button class="btn btn-primary">Check-in</button></a></td>
                </tr>`;
            }
            return closestStores;
        },
        render: function(closestStores) {
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
        <tbody>`+ closestStores +`</tbody>
      </table>
    </div>`);
        }, // end render
        findClosest: function(lat, lng, count=3) {
            // rank distances of stores from current location
            var R = 6371; // radius of earth in km
            var distances = {};
            var closest = -1;
            var farthest = {id: 0, d: 0};
            for( i = 0 ; i < markers.length; i++ ) {
                var mlat = markers[i].lat;
                var mlng = markers[i].lng;
                var dLat  = rad(mlat - lat);
                var dLong = rad(mlng - lng);
                var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c;
                markers[i]['distance'] = Number((d).toFixed(2)); // add distance to markers object
                /* add markers to distance if they're in the closest 'count' */
                let len = (Object.keys(distances).length);
                if (len < count) {
                    if (d > farthest['d']) {
                        farthest = {id: i, d: d};
                    } // else farthest remains the same
                    distances[i] = (markers[i]);
                } else if (d < farthest['d']) {
                    delete distances[(farthest['id'])];
                    // need algorithm to assign new farther value
                    distances[i] = (markers[i]);
                }
            }
            // console.debug(distances);
            return distances;
        } // end findClosest
    } // end locationspage
}

function errorCallback() { console.log("errorCallback"); }
function initGeolocation() {
    if (navigator && navigator.geolocation) {
        var watchId = navigator.geolocation.watchPosition(
            successCallback,
            errorCallback,
            {enableHighAccuracy:true,timeout:60000,maximumAge:0}
        );
    } else {
        alert('Geolocation is not supported on this device');
    }
}
function successCallback(position) {
    var stores = globalVariable.locationspage.findClosest(position.coords.latitude, position.coords.longitude);
    setTimeout(function(){
        var html = globalVariable.locationspage.populateStores(stores);
        setTimeout(function(){
            globalVariable.locationspage.render(html);
        }, 555);
    }, 555);
}

// helper function
function rad(x) {return x*Math.PI/180;}

$(document).ready(function(){
    // console.debug(markers);
});
