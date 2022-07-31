console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function () {
    getRemoteData();
});
function getRemoteData() {
    // write your code here to fetch data from api. 
   fetch(`https://www.justcode.com/dataservice/api/paymentMethod/list`)
   .then(response => response.json())
   .then(responseJson => displayResults(responseJson))
}

function displayResults(responseJson){
     console.log(responseJson);
    $('#mytable').html("")
    responseJson.forEach(table => {
        $('#mytable').append(`
        <div>
        <table>
        <tr>
        <th>${table.id}</th>
        <th>${table.methodName}</th>
        <th>${table.medium}</th>
        <th>${table.yearOfOrigin}</th>
        <th>${table.modifiedOn}</th>
        </tr>
        </table>
        </div>
        `)
    })
}


function watchForm() {
  $('#mytable').submit(e => {
    e.preventDefault();
    getRemoteData();
  })
}
//run this function 1st anytime the app starts or the document is ready
$(function () {
    console.log('App loaded! Waiting!');
    watchForm();
});