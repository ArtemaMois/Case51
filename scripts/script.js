// let offset = 0;
import * as Slider from'./index'

const impressiveSlider = document.querySelector('.impressive__sliderline');
const impressiveItems = document.querySelectorAll('.impressive__item');
const nextBtn = document.querySelector('.impressive__next');
const prevBtn = document.querySelector('.impressive__prev');

const clientSlider = document.querySelector('.client__sliderline');
const clientItems = document.querySelectorAll('.client__item');
const clientDots = document.querySelectorAll('.client__active');


const slider1 = new Slider(impressiveSlider, impressiveItems, null, "none", nextBtn, prevBtn);
const slider2 = new Slider(clientSlider, clientItems, clientDots, "client__focus", null, null);