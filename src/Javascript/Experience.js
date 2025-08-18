// Experience Page JavaScript
// Author: [Your Name]
// Description: Interactive functionality for the experience portfolio page

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Header scroll effect - adds 'scrolled' class when user scrolls down
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 100);
        }
    });

    // Smooth scrolling for navigation links (for internal page links)
    document.querySelectorAll('nav a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            // Only prevent default for internal anchor links (starting with #)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Enhanced image loading with fade-in effect
    const images = document.querySelectorAll('.image-container img');
    images.forEach(function(img) {
        img.classList.add('image-loading');
        
        if (img.complete) {
            img.classList.remove('image-loading');
            img.classList.add('image-loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.remove('image-loading');
                img.classList.add('image-loaded');
            });
        }
    });

    // Intersection Observer for animation triggers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all experience items for scroll animations
    document.querySelectorAll('.experience-item').forEach(function(item) {
        observer.observe(item);
    });

    // Enhanced keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Add focus trap for mobile menu accessibility
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    // Apply focus trap to navigation when it's active
    if (nav) {
        trapFocus(nav);
    }

    // Performance optimization: Debounced scroll handler
    let scrollTimeout;
    const debounceScroll = function(func, delay) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(func, delay);
    };

    // Optimized scroll handler
    window.addEventListener('scroll', function() {
        debounceScroll(function() {
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 100);
            }
        }, 10);
    });

    // Add hover effects for better user interaction
    document.querySelectorAll('.image-container').forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Console log for debugging (remove in production)
    console.log('Experience page JavaScript loaded successfully');
    
});

// Additional utility functions

// Function to handle dynamic content loading (if needed in the future)
function loadExperienceData(data) {
    // Future implementation for dynamic content
    console.log('Loading experience data:', data);
}

// Function to handle form submissions (if contact forms are added)
function handleFormSubmission(formData) {
    // Future implementation for contact forms
    console.log('Handling form submission:', formData);
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadExperienceData,
        handleFormSubmission
    };
}