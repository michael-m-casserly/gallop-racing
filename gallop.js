// Include FOOTER 
function w3IncludeHTML_Footer() {
    var z, i, a, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      if (z[i].getAttribute("w3-include-html-footer")) {
        a = z[i].cloneNode(false);
        file = z[i].getAttribute("w3-include-html-footer");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            a.removeAttribute("w3-include-html-footer");
            a.innerHTML = xhttp.responseText;
  
            z[i].parentNode.replaceChild(a, z[i]);
            w3IncludeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

// Include BANNER
function w3IncludeHTML_Banner() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html-banner")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html-banner");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("w3-include-html-banner");
          a.innerHTML = xhttp.responseText;

          z[i].parentNode.replaceChild(a, z[i]);
          w3IncludeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}