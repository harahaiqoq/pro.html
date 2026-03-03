// Typing Animation Phrases Update
const typedText = document.getElementById('typedText');
const phrases = [
    'Full Stack Developer',
    'Telegram Bot Expert',
    'Creative Coder',
    'Tech Enthusiast'
];
// ... (keep the rest of the typing logic from your original script)

// Start typing effect
document.addEventListener('DOMContentLoaded', typeEffect);

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Console Message Update
console.log('%c Welcome to Harsh\'s Portfolio! ', 'background: #7C3AED; color: white; padding: 10px; font-size: 14px; border-radius: 5px;');
console.log('%c Build with love by Harsh.', 'color: #A78BFA;');
