const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//Fin Seccion 
const section = document.querySelector('section');
const end = section.querySelector('h1');

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Escenas
let scene = new ScrollMagic.Scene({
    duration: 11000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Video animation
let accelomaunt = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(()=>{ 
    delay += (scrollpos - delay) * accelomaunt;
    console.log(scrollpos, delay);


    video.currentTime = delay;
}, 41.6);