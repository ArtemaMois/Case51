// let offset = 0;
import Slider from '../modules/index.js';

const impressiveSlider = document.querySelector('.impressive__sliderline');
const impressiveItems = document.querySelectorAll('.impressive__item');
const nextBtn = document.getElementById('impressive__next');
const prevBtn = document.getElementById('impressive__prev');

const clientSlider = document.querySelector('.client__sliderline');
const clientItems = document.querySelectorAll('.client__item');
const clientDots = document.querySelectorAll('.client__active');


const slider1 = new Slider(impressiveSlider, impressiveItems, null, "none", nextBtn, prevBtn, false);
const slider2 = new Slider(clientSlider, clientItems, clientDots, "client__focus", null, null, true);
slider2.autoSlider()