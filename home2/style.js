document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply JS Animation styles
                entry.target.style.transition = "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Target the hero image for JS animation
    const revealElements = document.querySelectorAll('.js-reveal');
    revealElements.forEach(el => observer.observe(el));
});