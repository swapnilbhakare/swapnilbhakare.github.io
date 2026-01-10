// Auto-update experience calculation
function calculateExperience() {
    const startDate = new Date('2021-05-01'); // Your career start date
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    
    // Update experience in home section
    const experienceText = document.querySelector('#home .left p');
    if (experienceText) {
        experienceText.innerHTML = experienceText.innerHTML.replace(/\d+\.?\d*\+?\s*years?/i, `${diffYears}+ years`);
    }
}

// Animated typing effect for name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animated skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress__bar');
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = percent + '%';
        }, 500);
    });
}

// Floating animation for profile image
function addFloatingAnimation() {
    const profileImg = document.querySelector('.swap');
    if (profileImg) {
        profileImg.style.animation = 'float 3s ease-in-out infinite';
    }
}

// Parallax scrolling effect
function parallaxScroll() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Calculate and update experience
    calculateExperience();
    
    // Typing effect for name
    const nameElement = document.querySelector('#home .left h1');
    if (nameElement) {
        const originalText = nameElement.textContent;
        setTimeout(() => typeWriter(nameElement, originalText, 150), 1000);
    }
    
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    });
    
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Add floating animation
    setTimeout(addFloatingAnimation, 2000);
    
    // Parallax scroll effect
    window.addEventListener('scroll', parallaxScroll);
});

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-in {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .skill-box {
        animation: fadeInUp 0.6s ease-out;
        animation-fill-mode: both;
    }
    
    .skill-box:nth-child(1) { animation-delay: 0.1s; }
    .skill-box:nth-child(2) { animation-delay: 0.2s; }
    .skill-box:nth-child(3) { animation-delay: 0.3s; }
    .skill-box:nth-child(4) { animation-delay: 0.4s; }
    .skill-box:nth-child(5) { animation-delay: 0.5s; }
    .skill-box:nth-child(6) { animation-delay: 0.6s; }
    .skill-box:nth-child(7) { animation-delay: 0.7s; }
    .skill-box:nth-child(8) { animation-delay: 0.8s; }
`;
document.head.appendChild(style);