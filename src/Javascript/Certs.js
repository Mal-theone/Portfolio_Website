// Enhanced interactivity for certification images - Dark Theme Version
document.addEventListener('DOMContentLoaded', function() {
    
    // Certification data with detailed information
    const certificationData = {
        'Itf': {
            name: 'CompTIA IT Fundamentals+',
            description: 'Foundation-level certification covering basic IT concepts, software development, database fundamentals, and security.',
            skills: ['Basic IT Concepts', 'Software Development', 'Database Fundamentals', 'Security Basics'],
            issuer: 'CompTIA',
            validUntil: 'Lifetime'
        },
        'Network': {
            name: 'CompTIA Network+',
            description: 'Intermediate-level certification covering network technologies, installation and configuration, media and topologies, and network security.',
            skills: ['Network Technologies', 'Network Installation', 'Network Media & Topologies', 'Network Management'],
            issuer: 'CompTIA',
            validUntil: '3 Years'
        },
        'Security': {
            name: 'CompTIA Security+',
            description: 'Baseline cybersecurity certification covering threats, attacks, vulnerabilities, architecture, design, implementation, operations, and incident response.',
            skills: ['Threat Management', 'Cryptography', 'Identity Management', 'Risk Management'],
            issuer: 'CompTIA',
            validUntil: '3 Years'
        },
        'Cysa': {
            name: 'CompTIA CySA+',
            description: 'Intermediate-level cybersecurity analyst certification focusing on threat detection, data analysis, and security monitoring.',
            skills: ['Threat Detection', 'Data Analysis', 'Vulnerability Assessment', 'Incident Response'],
            issuer: 'CompTIA',
            validUntil: '3 Years'
        },
        'Casp': {
            name: 'CompTIA CASP+',
            description: 'Advanced-level cybersecurity certification for senior security professionals covering enterprise security, risk management, and incident response.',
            skills: ['Enterprise Security', 'Risk Management', 'Security Architecture', 'Incident Response'],
            issuer: 'CompTIA',
            validUntil: '3 Years'
        },
        'Ejpt': {
            name: 'eLearnSecurity Junior Penetration Tester',
            description: 'Practical penetration testing certification focusing on real-world scenarios and hands-on testing methodologies.',
            skills: ['Penetration Testing', 'Vulnerability Assessment', 'Web Application Testing', 'Network Security'],
            issuer: 'eLearnSecurity',
            validUntil: 'Lifetime'
        },
        'Isc2': {
            name: 'ISC2 Certification',
            description: 'Professional cybersecurity certification from ISC2, covering advanced security concepts and practices.',
            skills: ['Security Management', 'Risk Assessment', 'Security Architecture', 'Compliance'],
            issuer: 'ISC2',
            validUntil: '3 Years'
        }
        
    };

    // Create modal for displaying certification details
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'certModal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';

        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Close modal functionality
        closeBtn.onclick = () => closeModal();
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };

        return { modal, modalContent };
    }

    function closeModal() {
        const modal = document.getElementById('certModal');
        if (modal) {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }

    function showCertificationDetails(certId) {
        const cert = certificationData[certId];
        if (!cert) return;

        let modal = document.getElementById('certModal');
        if (!modal) {
            const modalElements = createModal();
            modal = modalElements.modal;
        }

        const modalContent = modal.querySelector('.modal-content');
        
        // Clear previous content (except close button)
        const closeBtn = modalContent.querySelector('.close');
        modalContent.innerHTML = '';
        modalContent.appendChild(closeBtn);

        // Add certification details
        const content = document.createElement('div');
        content.innerHTML = `
            <h2>${cert.name}</h2>
            <p>${cert.description}</p>
            
            <div class="skills-container">
                <h3>Key Skills:</h3>
                <div>
                    ${cert.skills.map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="cert-details">
                <div>
                    <strong>Issuer:</strong> ${cert.issuer}
                </div>
                <div>
                    <strong>Valid:</strong> ${cert.validUntil}
                </div>
            </div>
        `;
        
        modalContent.appendChild(content);
        modal.style.display = 'block';
    }

    // Add click event listeners to all certification images
    Object.keys(certificationData).forEach(certId => {
        const img = document.getElementById(certId);
        if (img) {
            img.addEventListener('click', () => showCertificationDetails(certId));
            
            // Add visual feedback on click
            img.addEventListener('mousedown', () => {
                img.style.transform = 'scale(1.05)';
            });
            
            img.addEventListener('mouseup', () => {
                img.style.transform = 'scale(1.1)';
            });
            
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Mobile navigation toggle (if hamburger menu is added later)
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Add loading animation completion
    setTimeout(() => {
        document.querySelectorAll('.container img').forEach(img => {
            img.style.opacity = '1';
        });
    }, 100);

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });
});

// Add smooth page transitions
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Intersection Observer for scroll animations
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

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.certification-content h1, .certification-content h2, .container');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
