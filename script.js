let typingText = new Typed("#text", {
    strings : ["Wei Chong", "Coder", "Adventurous"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
})

let banner = document.querySelector('.banner');
let footend = document.querySelector('.footend');
let dayNight = document.querySelector('.dayNight');
dayNight.onclick = function(){
    banner.classList.toggle('night');
    footend.classList.toggle('night');
}