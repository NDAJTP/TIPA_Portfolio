// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close navbar when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// ===== TYPING EFFECT =====
const jobTitles = ['Photographer', 'Video Editor', 'Writer', 'Musician', 'IT Student'];
const jobTitleSpan = document.getElementById('job-title');
let titleIndex = 0;

function typeText(text, charIndex, onDone) {
    if (charIndex < text.length) {
        jobTitleSpan.textContent += text.charAt(charIndex);
        setTimeout(() => typeText(text, charIndex + 1, onDone), 100);
    } else {
        setTimeout(onDone, 1500);
    }
}

function deleteText(onDone) {
    if (jobTitleSpan.textContent.length > 0) {
        jobTitleSpan.textContent = jobTitleSpan.textContent.slice(0, -1);
        setTimeout(() => deleteText(onDone), 50);
    } else {
        onDone();
    }
}

function cycleJobTitle() {
    typeText(jobTitles[titleIndex], 0, () => {
        deleteText(() => {
            titleIndex = (titleIndex + 1) % jobTitles.length;
            cycleJobTitle();
        });
    });
}

cycleJobTitle();


// ===== LOGO VISIBILITY ON SCROLL =====
const logo = document.querySelector('.logo');
const homeSection = document.getElementById('home');
const header = document.querySelector('.header');

function toggleLogoVisibility() {
    if (window.scrollY > homeSection.offsetHeight) {
        logo.style.display = 'flex'; // or 'block', but flex matches header's display?
    } else {
        logo.style.display = 'none';
    }
}

// ===== HEADER TRANSPARENCY ON SCROLL =====
function updateHeaderStyle() {
    if (window.scrollY > homeSection.offsetHeight) {
        // When scrolled past home section - more opaque
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.backdropFilter = 'blur(8px)';
        header.style.transition = 'background 0.5s ease, backdrop-filter 0.5s ease';
    } else {
        // When on home section - more transparent
        header.style.background = 'rgba(0, 0, 0, 0.3)';
        header.style.backdropFilter = 'blur(4px)';
        header.style.transition = 'background 0.5s ease, backdrop-filter 0.5s ease';
    }
}

// Run on load and scroll
window.addEventListener('load', () => {
    toggleLogoVisibility();
    updateHeaderStyle();
});
window.addEventListener('scroll', () => {
    toggleLogoVisibility();
    updateHeaderStyle();
});
