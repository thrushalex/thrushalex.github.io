function convertAddress() {
    var toRemove = ["b","d","f","j","k","n","p","q","q","v","w","y","z"]
    var address = "bbqtwphdznprjkduwyszzjhqajklnddebx@gmail.com"

    for (let i = 0; i < toRemove.length; i++) {
        address = address.replaceAll(toRemove[i], '')
    }
    document.getElementById("emailDiv").innerHTML=address;
}

function myFunction() {
    var x = document.getElementById("emailDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }