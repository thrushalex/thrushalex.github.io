function convertAddress() {
    var toRemove = ["b","d","f","j","k","n","p","q","q","v","w","y","z"]
    var address = "bbqtwphdznprjkduwyszzjhqajklnddebx@gmail.com"

    for (let i = 0; i < toRemove.length; i++) {
        address = address.replaceAll(toRemove[i], '')
    }
    return address
}

function displayAddress() {
    var emailDiv = document.getElementById("emailDiv");
    var emailButton = document.getElementById("emailButton");
    emailDiv.innerHTML=convertAddress();
    if (emailDiv.style.display === "none") {
      emailDiv.style.display = "block";
      emailButton.style.display = "none";
    }
  }