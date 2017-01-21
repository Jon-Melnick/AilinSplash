'use strict'

const IMAGES = ["Tourmaline-Ring-Angle-View-1-V2.jpg", "Tourmaline-Ring-Front-View.jpg", "Tourmaline-Ring-Angle-View-2.jpg", "Tourmaline-Ring-Thru-Finger-View-1-V2.jpg", "Tourmaline-Ring-Thru-Finger-View-2-V2.jpg"]

let img = 0;
let ring, interv;


function changeImage() {
  increment();
  ring.src = `img/${IMAGES[img]}`;
}

function increment(){
  img = (img + 1)%IMAGES.length
}

function timer() {
  interv = setInterval(changeImage, 6000);
}

function changeSlideImage(i) {
  ring.src = i.src;
  let x = i.src.split('/');
  img = IMAGES.indexOf(x[x.length-1]);
  clearInterval(interv);
  timer();
}

function addClickListen() {
  let images = document.getElementsByClassName('product-images')
  for(let i of images){
    i.addEventListener('click', ()=>changeSlideImage(i))
  }
}

function begin() {
  addClickListen()
  timer();
  ring = document.getElementById('ring')
}
