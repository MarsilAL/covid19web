const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

function login(loginUsername){
    const apiUrl = 'https://covid19ta.herokuapp.com/login';
   return $.ajax({
        url: apiUrl,
        data:{
          loginUsername:loginUsername,
        },
          //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(loginUsername));
        },
        type: 'GET',
        contentType: 'json',
    });
}
export {login};