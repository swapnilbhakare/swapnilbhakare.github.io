// Comet Cursor with Fire Trail Effect
const cursor = document.createElement('div');
cursor.className = 'cursor-shadow';
document.body.appendChild(cursor);

const trail = document.createElement('canvas');
trail.style.position = 'fixed';
trail.style.top = '0';
trail.style.left = '0';
trail.style.pointerEvents = 'none';
trail.style.zIndex = '9998';
trail.style.mixBlendMode = 'screen';
document.body.appendChild(trail);

trail.width = window.innerWidth;
trail.height = window.innerHeight;
const ctx = trail.getContext('2d');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
const particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 3;
    this.speedX = (Math.random() - 0.5) * 3;
    this.speedY = (Math.random() - 0.5) * 3;
    this.life = 1;
    this.hue = Math.random() * 20 + 10;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 0.015;
    this.size *= 0.97;
  }
  
  draw() {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, `hsla(${this.hue}, 100%, 60%, ${this.life})`);
    gradient.addColorStop(0.5, `hsla(${this.hue + 10}, 100%, 50%, ${this.life * 0.5})`);
    gradient.addColorStop(1, `hsla(${this.hue + 20}, 100%, 40%, 0)`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursor.style.left = mouseX - 10 + 'px';
  cursor.style.top = mouseY - 10 + 'px';
  
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
});

function animate() {
  ctx.clearRect(0, 0, trail.width, trail.height);
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    
    if (particles[i].life <= 0) {
      particles.splice(i, 1);
    }
  }
  
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  trail.width = window.innerWidth;
  trail.height = window.innerHeight;
});

// preloader 
const preloader = document.querySelector(".preloader");
window.addEventListener('load',()=>{
    setTimeout(()=>{
        preloader.classList.add('hide-preloader');
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
dayEl.innerHTML = `${day}`


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



 








