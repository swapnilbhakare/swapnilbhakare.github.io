// Calculate work experience from Octrans Technologies to Newgen Technomate
function calculateWorkExperience() {
    // Work experience periods (excluding education)
   
    const tcsStart = new Date('2022-01-01');     // Jan 2022
    const tcsEnd = new Date('2023-12-31');       // Dec 2023
    const newgenStart = new Date('2024-01-01');  // Jan 2024
    const currentDate = new Date();
    
    // Calculate months for each period
    const octransMonths = ((octransEnd - octransStart) / (1000 * 60 * 60 * 24 * 30.44)) + 1;
    const tcsMonths = ((tcsEnd - tcsStart) / (1000 * 60 * 60 * 24 * 30.44)) + 1;
    const newgenMonths = ((currentDate - newgenStart) / (1000 * 60 * 60 * 24 * 30.44));
    
    // Total work experience in months
    const totalWorkMonths = Math.floor(octransMonths + tcsMonths + newgenMonths);
    const totalWorkYears = (totalWorkMonths / 12).toFixed(1);
    
    // Update experience in home section
    const experienceText = document.querySelector('#home .left p');
    if (experienceText) {
        const newText = experienceText.innerHTML.replace(/\d+\.?\d*\+?\s*years?/i, `${totalWorkYears}+ years`);
        if (experienceText.innerHTML !== newText) {
            experienceText.style.opacity = '0.7';
            setTimeout(() => {
                experienceText.innerHTML = newText;
                experienceText.style.opacity = '1';
            }, 200);
        }
    }
    
    return { totalWorkYears, totalWorkMonths };
}

// Scroll progress bar
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
}

// Lazy loading for images
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                imageObserver.unobserve(entry.target);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Start dynamic updates
function startDynamicUpdates() {
    // Initial calculation
    calculateWorkExperience();
    
    // Update every month (30 days = 2592000000 ms) for monthly experience tracking
    setInterval(calculateWorkExperience, 2592000000);
    
    // Also update when page becomes visible (user returns to tab)
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            setTimeout(calculateWorkExperience, 1000);
        }
    });
    
    // Update on window focus
    window.addEventListener('focus', () => {
        setTimeout(calculateWorkExperience, 500);
    });
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

// Cursor shadow effect
function createCursorShadow() {
    const cursorShadow = document.createElement('div');
    cursorShadow.className = 'cursor-shadow';
    document.body.appendChild(cursorShadow);
    
    document.addEventListener('mousemove', (e) => {
        cursorShadow.style.left = e.clientX - 10 + 'px';
        cursorShadow.style.top = e.clientY - 10 + 'px';
    });
    
    // Show/hide cursor shadow
    document.addEventListener('mouseenter', () => {
        cursorShadow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorShadow.style.opacity = '0';
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create cursor shadow effect
    createCursorShadow();
    
    // Start dynamic experience updates
    startDynamicUpdates();
    
    // Setup scroll progress bar
    window.addEventListener('scroll', updateScrollProgress);
    
    // Setup lazy loading
    setupLazyLoading();
    
    // Show navbar after preloader
    setTimeout(() => {
        const navbar = document.querySelector('.navbar-fixed');
        if (navbar) {
            navbar.classList.add('show');
        }
    }, 2000);
    
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
    
    // Initialize premium cursor animation
    createPremiumCursor();
    
    // Enhance skill boxes
    enhanceSkillBoxes();
    
    // Add floating elements
    addFloatingElements();
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
    
    /* Scroll Progress Bar */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff6347, #ff4500);
        z-index: 1000;
        transition: width 0.1s ease;
    }
    
    /* Navbar Fixed */
    .navbar-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(26, 26, 26, 0.95);
        backdrop-filter: blur(10px);
        z-index: 1000;
        padding: 15px 0;
        transition: all 0.3s ease;
        border-bottom: 1px solid rgba(255, 99, 71, 0.2);
    }
    
    .navbar-fixed .container {
        width: 1152px;
        max-width: 90%;
        margin: 0 auto;
    }
    
    .navbar-fixed .logo span {
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
    }
    
    .navbar-fixed ul li a {
        color: #ffffff;
        font-size: 1rem;
        transition: all 0.3s ease;
    }
    
    .navbar-fixed ul li a:hover {
        color: #ff6347;
    }
    
    /* Adjust body for fixed navbar */
    body {
        padding-top: 70px;
    }
    
    /* Technologies Timeline */
    .inner__tech .heading {
        margin-bottom: 2rem;
    }
    
    .inner__tech .heading i {
        color: #ffffff;
        font-size: 52px;
    }
    
    .inner__tech .heading h5 {
        font-size: 16px;
        margin-top: 0.5rem;
        color: #ffffff;
    }
    
    /* Lazy Loading */
    img[loading="lazy"] {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    img[loading="lazy"].loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);
// Premium Cursor-Follow Circular Animation
function createPremiumCursor() {
    // Create floating circles
    const circles = [];
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.className = 'floating-circle';
        circle.style.cssText = `
            position: fixed;
            width: ${60 + i * 20}px;
            height: ${60 + i * 20}px;
            border-radius: 50%;
            background: rgba(255, 99, 71, ${0.1 - i * 0.02});
            border: 2px solid rgba(255, 99, 71, ${0.3 - i * 0.05});
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(10px);
        `;
        document.body.appendChild(circle);
        circles.push(circle);
    }

    let mouseX = 0, mouseY = 0;
    let rotation = 0;

    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        circles.forEach((circle, index) => {
            const delay = (index + 1) * 0.02;
            const offsetX = mouseX * delay;
            const offsetY = mouseY * delay;
            
            setTimeout(() => {
                circle.style.transform = `
                    translate(${offsetX - circle.offsetWidth/2}px, ${offsetY - circle.offsetHeight/2}px) 
                    rotate(${rotation + index * 15}deg) 
                    scale(${1 + index * 0.1})
                `;
            }, index * 50);
        });
    });

    // Continuous rotation
    setInterval(() => {
        rotation += 0.5;
    }, 50);

    // Hover interactions for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-box, .contact-card, .social-item, .award-card, .project-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            circles.forEach((circle, index) => {
                circle.style.transform += ` scale(${1.2 + index * 0.1}) rotate(${rotation + 45}deg)`;
                circle.style.background = `rgba(255, 99, 71, ${0.2 - index * 0.03})`;
            });
        });
        
        element.addEventListener('mouseleave', () => {
            circles.forEach((circle, index) => {
                circle.style.background = `rgba(255, 99, 71, ${0.1 - index * 0.02})`;
            });
        });
    });
}

// Enhanced skill box animations
function enhanceSkillBoxes() {
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach((box, index) => {
        box.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        box.addEventListener('mouseenter', () => {
            box.style.transform = `translateY(-8px) rotate(${Math.random() * 4 - 2}deg) scale(1.02)`;
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    });
}

// Floating elements animation
function addFloatingElements() {
    const floatingElements = document.querySelectorAll('.contact-card, .award-card, .social-item');
    floatingElements.forEach((element, index) => {
        element.style.animation = `floatGentle ${3 + index * 0.5}s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.2}s`;
    });
}