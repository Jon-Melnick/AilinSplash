'use strict'

const IMAGES = ["Tourmaline-Ring-Angle-View-1-V2", "Tourmaline-Ring-Front-View", "Tourmaline-Ring-Angle-View-2", "Tourmaline-Ring-Thru-Finger-View-1-V2"]

let img = 0;

function changeImage() {
  increment();
  let ring = document.getElementById('ring')
  ring.src = `img/${IMAGES[img]}.jpg`;
}

function increment(){
  img = (img + 1)%IMAGES.length
}

function timer() {
  setInterval(changeImage, 3000);
}

function enter(){

}

function leave() {

}

function begin() {
  timer();
  let ring = document.getElementById('ring');
  ring.addEventListener('mouseenter', enter)
  ring.addEventListener('mouseleave', leave)
}
