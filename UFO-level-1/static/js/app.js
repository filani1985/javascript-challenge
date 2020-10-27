//from data.js
var tableData = data;

console.log(tableData[0].datetime);
// YOUR CODE HERE!

var table = document.getElementById('ufo-table');

tableData.forEach(function(object) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + object.datetime + '</td>' +
      '<td>' + object.city + '</td>' +
      '<td>' + object.state + '</td>' +
      '<td>' + object.country + '</td>'+
      '<td>' + object.shape + '</td>'+
      '<td>' + object.durationMinutes + '</td>'+
      '<td>' + object.comments + '</td>';
    table.appendChild(tr);
  });


var e = document.getElementById("filt");
var strUser = e.options[e.selectedIndex].value;
console.log(strUser);
  function myFunction() {

    var e = document.getElementById("filt");
strUser = e.options[e.selectedIndex].value;

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[strUser];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }