const menuIcon = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');
const sideMenuOpa = document.querySelector('.side-menu-opa');
const body = document.querySelector('body');
const closeSideMenu = document.querySelector('.close-side-menu');
const loadingSpinner = document.querySelector('.loading');

window.addEventListener('load', () => {
  body.style.overflow = 'hidden'
  setTimeout(showPage, 1000);
})

function showPage() {
  loadingSpinner.style.display = "none";
  body.style.overflow = 'unset'
}

menuIcon.addEventListener('click', function () {
  sideMenu.classList.add('side-menu-open')
  sideMenuOpa.classList.add('side-menu-open')
  body.style.overflow = 'hidden'
})

sideMenuOpa.addEventListener('click', function () {
  sideMenu.classList.remove('side-menu-open')
  sideMenuOpa.classList.remove('side-menu-open')
  body.style.overflow = 'unset'
})

closeSideMenu.addEventListener('click', function () {
  sideMenu.classList.remove('side-menu-open')
  sideMenuOpa.classList.remove('side-menu-open')
  body.style.overflow = 'unset'
})


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else if (currentScrollPos <= 0) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
