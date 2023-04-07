// Pauses video on scroll
window.addEventListener('scroll', function() {
  var video = document.getElementById('bg-video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// CONTEXT MENU CUSTOMIZING
var Contextmenu = !function(){
  var id = 'contextmenu';
  {
      var ul = document.getElementById(id);
      ul.classList.add('dropdown-menu');
      ul.setAttribute('role', 'menu');
      ul.setAttribute('aria-labelledby', 'dropdownMenu');
  }
  var ul = document.getElementById(id);
  document.addEventListener("contextmenu", function(e) {
      e.preventDefault();

      var x = e.pageX + 'px';
      var y = e.pageY + 'px';
      ul.style.display = 'block';
      ul.style.left = x;
      ul.style.top = y;
  })
  document.addEventListener("click", function(e) {ul.style.display = 'none'})
}()

// CLOCK
const clock = document.querySelector('#clock');

function getClock(){
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}`;
}

setInterval(getClock, 1000);