const header = document.getElementById('header');

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
};

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  nav.classList.toggle('nav-active');
  body.classList.toggle('body-disable');
});

nav.addEventListener('click', () => {
  if (nav.classList.contains('nav-active')) {
    burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
    body.classList.toggle('body-disable');
  }
});
