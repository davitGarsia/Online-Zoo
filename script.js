'use strict';
const nav = document.querySelector('.main-nav-list');
const about = document.querySelector('.main-nav-link');
const section1 = document.querySelector('#section--1');
const logo = document.querySelector('.logo-container');
const mail = document.querySelector('.gmail');

nav.addEventListener('click', e => {
  about.classList.add('abt');
});

// about.addEventListener('click', function (e) {
//   e.preventDefault();
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// logo.addEventListener('click', function (e) {
//   e.preventDefault();
//   section1.scrollIntoView({ behavior: 'smooth' });
// });
