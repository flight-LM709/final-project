// splash

var splash = document.querySelector(".splash");
if(splash) {
  document.addEventListener('DOMContentLoaded', function(event) {
    setTimeout(function() {
      splash.style.display = 'none'
    }, 3000);
  })
}

var animate = document.querySelector('.astro2');

if(animate) {
  document.addEventListener('DOMContentLoaded', function(event){
    setTimeout(function(){
      animate.classList.add('animation')
    }, 400);
  })
}

var splashText = document.querySelector('.splash-text');

if(splashText) {
    setTimeout(function(){splashText.innerHTML = "Come in!"
  }, 2000);
}

// Changing Jumbotron Image
function changeImage(element){
    element.setAttribute('src', 'assets/rowlet-jumbotron-2.jpg')
}

function changeImageBack(element){
    element.setAttribute('src', 'assets/rowlet-jumbotron-1.jpg')
}

AOS.init()