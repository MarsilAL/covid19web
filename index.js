import { register } from "./registerService"
import { login } from "./loginService"
const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

var lat = "";
var lng = "";

function showLoginView() {
  console.log("test")
  $(".loginSection").show();
  $(".registerSection").hide();
  $("#errMsg").hide();
}

function showRegisterView() {
  $(".loginSection").hide();
  $(".registerSection").show();
}

function showUserView() {
  console.log("show the user view")
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  if(!position.coords){
    return;
  }
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  var x = document.getElementById("chkLat");
  var y = document.getElementById("chkLng");
  x.innerHTML = "Latitude: " + lat;
  y.innerHTML = "Longitude: " + lng;
}


/// Register
function handelRegisterClick(event) {
  event.preventDefault();

  const username = $("#reg__username").val();
  const hasCovid = $("#hasCovid").val();
  register(username, hasCovid, lat, lng).then(() => {
    showUserView();
  }).catch(() => {
    alert("fehler");
  })
}


/// Login
function handelLoginClick(event) {
  event.preventDefault();

  const loginUsername = $("#login__username").val();

  login(loginUsername).then(() => {
    showUserView();
  }).catch(() => {
    alert("anmeldung fehler");
  })
}




/// Document ready
$(document).ready(function () {
  showLoginView();
  $("#BtnReg").click(showRegisterView);
  $("#Chk").click(getLocation);
 
  /// Register
  $("#btn__register-req").click(handelRegisterClick)


  /// Login
  $("#BtnLogin").click(handelLoginClick)

  $("#Chk").click(showPosition);

});