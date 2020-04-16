const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

function register(username, hasCovid, lat, lng){
    const apiUrl = 'http://localhost:8080/register';
   return $.ajax({
        url: apiUrl,
        data:{
          username:username,
          hasCovid:hasCovid,
          lat:lat,
          lng:lng
        },
          //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username));
        },
        type: 'GET',
        contentType: 'json',
    });
}
export {register};