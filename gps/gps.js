function findTmobileStore() {
    createAppointmentPopup();
    createSchedule();
}

function createAppointmentPopup() {
    $("#tmob_lightbox").show();
}

function hideLightbox() {
    $("#tmob_lightbox").hide();
}

function createSchedule() {
    $("#schedule").html(ai.getSchedule());
}

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
function errorCallback() { console.log("errorCallback"); }

/* Normally this would just call the google api to find the closest tmobile store but since we're doing this hackathon at Georgia Tech, it's more fun to route everyone to the Tech Square Tmobile store */
function getClosestStore(lat=33.7770606, lng=-84.3901865) {
    let store = new google.maps.LatLng(
        lat,
        lng
    );
    return store;
}

function successCallback(position) {
    getClosestStore(position.coords.latitude, position.coords.longitude);
    let myLatlng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
    );
    if (
        $_GET['lat'] == position.coords.latitude
        &&
        $_GET['lng'] == position.coords.longitude
    ) {
        console.log('You have arrived');
        setTimeout(function(){
            window.location.replace("../wait");
        }, 999);
    } else if ($_GET['lat'] && $_GET['lng']) {
        calculateAndDisplayRoute(directionsService, directionsDisplay, myLatlng, getClosestStore($_GET['lat'], $_GET['lng']));
    } else { // defaults to Tech Square Tmobile
        calculateAndDisplayRoute(directionsService, directionsDisplay, myLatlng, getClosestStore());
    }
}

// helper function
var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

$( document ).ready(function() {
    $("#goToStore").on('click', function() {
        hideLightbox();
        return initGeolocation();
    });

    $(document).on('click', "#close_lightbox", function() {
        return hideLightbox();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape
            return hideLightbox();
        }
    });

    $(document).on('click', '.confirm', function(){
        let apptTime = $(this).text().substr(6);
        globalVariable.addToBackend(false, false, apptTime, false);
        $(this).text('We look forward to seeing you!');
        setTimeout(function() {
            location.href = '../';
        }, 2500);
    })
});
