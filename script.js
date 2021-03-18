'use strict'

const menuStacks = document.querySelector('.menu__stacks');
const subMenu = document.querySelector('.subMenu');
const intro = document.querySelectorAll('.intro');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

menuStacks.addEventListener('mouseenter', (e) => {
    for (let item of intro) {
        item.style.display = 'none';
    }
    subMenu.style.display = 'flex';

    //console.log(e);
})

header.addEventListener('mouseleave', (e) => {
    //header.style.backgroundColor = 'rgb(243, 255, 200)';
    for (let item of intro) {
        item.style.display = 'block';
    }
    subMenu.style.display = 'none';

    //console.log(e);
})