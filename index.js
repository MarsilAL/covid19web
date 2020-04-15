$(document).ready(function () {
$(".loginSection").show();
$(".registerSection").hide();
$("#errMsg").hide();

$("#BtnReg").click(handleRegister);
$("#Chk").click(getLocation);

//login
$("#btnLogin").click(goToApi);
$("#Chk").click(showPosition);



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

function goToApi(event){
  event.preventDefault();

  const username = $("#login__username").val();
 


  const apiUrl = 'https://$HOST/api/login?';
  $.ajax({
      url: apiUrl,
      success: function (json) {
          $("#errorMessage").hide();
          $("#loginSection").hide();
          $("#userSection").show();
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert(textStatus, errorThrown);
      },

      //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
      beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Basic " + btoa(username));
      },
      type: 'GET',
      contentType: 'json',
  });
}