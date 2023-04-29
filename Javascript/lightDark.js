localStorage.theme = 'white';
console.log(localStorage.theme);

let banner = document.querySelector('.banner');
let footend = document.querySelector('.footend');
let lightDark = document.querySelector('.lightDark');
lightDark.onclick = function(){
    banner.classList.toggle('dark');
    footend.classList.toggle('dark');
    if (localStorage.theme == 'white') {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'white';
    }
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}