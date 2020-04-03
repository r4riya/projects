
function loadDoc() {
    var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      }
   };
   xhttp.open("GET", "http://18.217.61.42:3000/coupon/getAll", true);
   xhttp.send();
  }