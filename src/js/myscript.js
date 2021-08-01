console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function() {
    getRemoteData();
});
function getRemoteData() {
    // write your code here to fetch data from api. 
    fetch('https://www.justcode.com/dataservice/api/paymentMethod/list')
    .then(response => response.json())
    .then(responseJson => 
        displayResults(responseJson))   
        .catch(err => {
         console.log(err)
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
    }
            

function displayResults(responseJson) {
    console.log(responseJson);
    $("#mytable").html("")//clears the results
    responseJson.forEach(table=>{//loops through the array
      $("#mytable").append(`
      <tr>
      <th>${table.id}</th>
      <th>${table.methodName}</th>
      <th>${table.medium}</th>
      <th>${table.yearOfOrigin}</th>
      <th>${table.modifiedOn}</th>
      </tr>
      `)//appends table to results div
    })
   }


function watchForm() {
    $('#mytable').submit(event => {
      event.preventDefault();
      getRemoteData();
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting!');
    watchForm();
  });