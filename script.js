// Navigation mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Changement de couleur de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = '#000';
        navbar.style.padding = '1rem 0';
    }
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulation d'envoi (remplacer par vraie logique)
        console.log('Données du formulaire:', data);
        
        // Message de succès
        alert('Message envoyé avec succès !');
        contactForm.reset();
    });
}

// Animation typing effect pour le titre
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

// Démarrer l'animation typing au chargement
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Compteur de visites simple
if (!localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', '0');
}

let visitCount = parseInt(localStorage.getItem('visitCount'));
visitCount++;
localStorage.setItem('visitCount', visitCount.toString());

console.log(`Nombre de visites: ${visitCount}`);

// Mode sombre/clair (optionnel)
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1000';
themeToggle.style.background = '#007bff';
themeToggle.style.color = 'white';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.width = '50px';
themeToggle.style.height = '50px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1.2rem';

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.body.appendChild(themeToggle);

// Ajouter les styles pour le mode sombre
const darkModeStyles = `
    .dark-mode {
        background: #1a1a1a;
        color: #fff;
    }
    
    .dark-mode .section {
        background: #2d2d2d !important;
    }
    
    .dark-mode .skill-card,
    .dark-mode .project-card,
    .dark-mode .info-item {
        background: #3d3d3d;
        color: #fff;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);