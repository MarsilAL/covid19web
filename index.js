$(document).ready(function () {
$(".loginSection").show();
$(".registerSection").hide();
$("#BtnReg").click(handleRegister);
$("#Chk").click(getLocation);
$("#Chk").click(showPosition);
$("#Chk").click(getAddress);



});

function handleRegister(){
    $(".loginSection").hide();
    $(".registerSection").show();
}


function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
        
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
        var x = document.getElementById("chkLat");
        var y = document.getElementById("chkLng");
        x.innerHTML="Latitude: " + lat;
        y.innerHTML="Longitude: " + lng;
        geocodeLatLng(position.coords.latitude, position.coords.longitude);
}