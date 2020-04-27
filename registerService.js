const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

function register(username, hasCovid, lat, lng){

  // we will send this to the backend
  let userPayload = {
      username:username,
      hasCovid:hasCovid,
      latitude:lat,
      longitude:lng
    }

    const apiUrl = 'https://covid19ta.herokuapp.com/register';
   return $.ajax({
        url: apiUrl,
        data: JSON.stringify(userPayload),
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json'
    });
}
export {register};