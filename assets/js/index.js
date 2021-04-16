let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  }else if(currentScrollPos <= 0){
      document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
