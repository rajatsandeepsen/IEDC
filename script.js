function openAll(){
  var extraTabs = document.getElementById('extraTabs');
  var openButton = document.getElementById('openButton');

  if (extraTabs.style.display == 'none'){
    extraTabs.style.display = 'flex';
    openButton.childNodes[1].classList.remove("bi-chevron-down");
    openButton.childNodes[1].classList.add("bi-chevron-up");
  }
  else{
  extraTabs.style.display = 'none';
  openButton.childNodes[1].classList.remove("bi-chevron-up");
  openButton.childNodes[1].classList.add("bi-chevron-down");
  }
}

function loading() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
}

// eventexternal
function openEventDetails(y){
  var x = document.getElementById(y);
  x.style.display = "flex";
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
