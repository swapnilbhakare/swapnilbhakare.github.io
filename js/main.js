// preloader 
const preloader = document.querySelector(".preloader");
window.addEventListener('load',()=>{
    setTimeout(()=>{
        preloader.classList.add('hide-preloader')
    },2000)
})
// slide images animation
let slideIndex =1;
showSlides(slideIndex)
function plusSlides(n) {
    showSlides((slideIndex+=n))
}
setInterval(function() {
    plusSlides(1)
},3 * 1000)


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('img')
    if(n> slides.length){
        slideIndex =1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(i=0;i<slides.length; i++){
        slides[i].style.display='none';
    }
    slides[slideIndex - 1 ].style.display='flex'
}


// skills
const bars = document.querySelectorAll(".progress__bar");
bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%"
    bar.style.width = percentage + "%"
})


// days 
let dayEl = document.querySelector("#day");

DateEl = new Date();
var weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

let day = weekday[DateEl.getDay()]
dayEl.innerHTML = `${day}...!`


// change bacground color 
function scrollWin(){

    
let bodyEl = document.querySelector("body");
let linkEl = document.querySelectorAll(".nav-link")
if(window.pageYOffset>=100){
    bodyEl.classList.add('changeColor')
    linkEl.forEach(link=>link.style.color ='#fff')

}
if(window.pageYOffset<=100){
    bodyEl.classList.remove('changeColor')
    linkEl.forEach(link=>link.style.color ='#000')

}

}



 





