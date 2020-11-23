let scroll=document.querySelector('.scroll');
  function scrollProgress() {
  var currentState = document.body.scrollTop || document.documentElement.scrollTop;
  if(currentState >= 200)
  {
    
    scroll.style.opacity = 0;
  }
  else
  {
    scroll.style.opacity = 1;
  }
}
window.onscroll = function () { scrollProgress() };