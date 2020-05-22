const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

function login(loginUsername, loginPSW){
    const apiUrl = 'https://covid19ta.herokuapp.com/login';
   return $.ajax({
        url: apiUrl,
        data:{
          loginUsername:loginUsername,
          loginPSW:loginPSW
        },
          //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(loginUsername,loginPSW));
        },
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json'
    });
}
export {login};