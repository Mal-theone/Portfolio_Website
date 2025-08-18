// Hybrid Techy-Lofi Main page with enhanced tech effects using lofi colors
document.addEventListener('DOMContentLoaded', function() {
    
    // Job titles for rotation (hybrid techy-lofi themed)
    const jobTitles = [
        'Cybersecurity Specialist',
        'Digital Forensics Expert',
        'Security Researcher',
        'Ethical Hacker',
        'SOC Analyst',
        'Penetration Tester'
    ];
    
    let currentTitleIndex = 0;
    let typingInterval;
    
    // Initialize enhanced typing animation with faster tech feel
    function initTypingAnimation() {
        const typingElement = document.querySelector('.typing-text span');
        if (!typingElement) return;
        
        function typeText(text, callback) {
            let i = 0;
            typingElement.textContent = '';
            
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    typingElement.textContent += text.charAt(i);
                    i++;
                    
                    // Add random glitch effect while typing
                    if (Math.random() < 0.1) {
                        typingElement.style.transform = `translateX(${Math.random() * 2 - 1}px)`;
                        setTimeout(() => {
                            typingElement.style.transform = 'translateX(0)';
                        }, 50);
                    }
                } else {
                    clearInterval(typeInterval);
                    setTimeout(callback, 2000); // Faster pace than lofi
                }
            }, 100); // Faster typing speed
        }
        
        function deleteText(callback) {
            const text = typingElement.textContent;
            let i = text.length;
            
            const deleteInterval = setInterval(() => {
                if (i > 0) {
                    typingElement.textContent = text.substring(0, i - 1);
                    i--;
                } else {
                    clearInterval(deleteInterval);
                    setTimeout(callback, 500); // Shorter pause
                }
            }, 50); // Faster deletion
        }
        
        function rotateTitle() {
            const currentTitle = jobTitles[currentTitleIndex];
            
            typeText(currentTitle, () => {
                deleteText(() => {
                    currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
                    rotateTitle();
                });
            });
        }
        
        // Start the rotation
        rotateTitle();
    }
    
    // Enhanced image pop-out with tech effects
    function initImagePopOut() {
        const homeImg = document.querySelector('.home-img');
        if (!homeImg) return;
        
        homeImg.addEventListener('click', function() {
            this.classList.toggle('pop-out');
            
            // Add tech sound effect simulation
            if (this.classList.contains('pop-out')) {
                createTechRipple(this);
            }
        });
        
        // Double-click for modal
        homeImg.addEventListener('dblclick', function() {
            showImageModal();
        });
        
        // Enhanced hover effect with glitch
        homeImg.addEventListener('mouseenter', function() {
            if (!this.classList.contains('pop-out')) {
                this.style.transition = 'all 0.3s ease';
                this.style.transform = 'translateY(-5px) rotateY(2deg)';
                
                // Add glitch effect
                setTimeout(() => {
                    this.style.animation = 'glitch 0.3s ease-in-out';
                }, 100);
            }
        });
        
        homeImg.addEventListener('mouseleave', function() {
            if (!this.classList.contains('pop-out')) {
                this.style.transform = 'translateY(0) rotateY(0deg)';
                this.style.animation = '';
            }
        });
    }
    
    function createTechRipple(element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: radial-gradient(circle, rgba(139, 233, 253, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: techRipple 0.6s ease-out;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Add ripple animation
        if (!document.querySelector('#tech-ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'tech-ripple-styles';
            style.textContent = `
                @keyframes techRipple {
                    to {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                }
                @keyframes glitch {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-2px) rotateY(1deg); }
                    40% { transform: translateX(2px) rotateY(-1deg); }
                    60% { transform: translateX(-1px) rotateY(1deg); }
                    80% { transform: translateX(1px) rotateY(-1deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    function showImageModal() {
        const modal = createModal();
        const homeImg = document.querySelector('.home-img img');
        
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            ${homeImg ? `<img src="${homeImg.src}" alt="${homeImg.alt}">` : '<div class="placeholder-modal">Profile Image</div>'}
            <h2>Malachi Biggers</h2>
            <p>Cybersecurity professional with hands-on experience in digital forensics, incident response, and ethical hacking. Dedicated to continuous learning and professional growth in the cybersecurity field.</p>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        // Add tech entrance effect
        modalContent.style.transform = 'translateY(-50px) scale(0.9) rotateX(10deg)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modalContent.style.transition = 'all 0.4s ease-out';
            modalContent.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            modalContent.style.opacity = '1';
        }, 50);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modalContent.style.transform = 'translateY(-30px) scale(0.95)';
            modalContent.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.removeChild(modal);
            }, 300);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modalContent.style.transform = 'translateY(-30px) scale(0.95)';
                modalContent.style.opacity = '0';
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.removeChild(modal);
                }, 300);
            }
        });
    }
    
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = '<div class="modal-content"></div>';
        return modal;
    }
    
    // Enhanced social media pop-out with tech effects
    function initSocialMediaPopOut() {
        // Check if social container already exists
        if (document.querySelector('.social-container')) return;
        
        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-container';
        
        socialContainer.innerHTML = `
            <div class="social-toggle">
                <i class="fas fa-share-alt"></i>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/malachi-biggers/" class="social-link linkedin" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Mal-theone" class="social-link github" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        `;
        
        document.body.appendChild(socialContainer);
        
        const toggle = socialContainer.querySelector('.social-toggle');
        const links = socialContainer.querySelector('.social-links');
        
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
            
            // Enhanced tech rotation with scale
            if (links.classList.contains('active')) {
                toggle.style.transform = 'rotate(45deg) scale(1.1)';
                createTechBurst(toggle);
            } else {
                toggle.style.transform = 'rotate(0deg) scale(1)';
            }
        });
        
        // Auto-hide after 5 seconds (tech pace)
        let autoHideTimeout;
        toggle.addEventListener('click', () => {
            if (links.classList.contains('active')) {
                clearTimeout(autoHideTimeout);
                autoHideTimeout = setTimeout(() => {
                    links.classList.remove('active');
                    toggle.style.transform = 'rotate(0deg) scale(1)';
                }, 5000);
            }
        });
    }
    
    function createTechBurst(element) {
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            const angle = (i * 60) * Math.PI / 180;
            const distance = 30;
            
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #ff79c6, #8be9fd);
                border-radius: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1000;
                animation: techBurst 0.8s ease-out forwards;
                animation-delay: ${i * 0.1}s;
            `;
            
            particle.style.setProperty('--end-x', `${Math.cos(angle) * distance}px`);
            particle.style.setProperty('--end-y', `${Math.sin(angle) * distance}px`);
            
            element.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 800);
        }
        
        // Add burst animation
        if (!document.querySelector('#tech-burst-styles')) {
            const style = document.createElement('style');
            style.id = 'tech-burst-styles';
            style.textContent = `
                @keyframes techBurst {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Enhanced hover effects for existing social icons
    function enhanceSocialIcons() {
        const socialIcons = document.querySelectorAll('.social-icons a');
        
        socialIcons.forEach((icon, index) => {
            icon.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
                this.style.animation = 'glitch 0.2s ease-in-out';
                
                // Platform-specific colors with tech glow
                if (index === 0) { // LinkedIn
                    this.style.borderColor = '#8be9fd';
                    this.style.color = '#8be9fd';
                    this.style.boxShadow = '0 0 20px rgba(139, 233, 253, 0.5)';
                    this.style.textShadow = '0 0 15px rgba(139, 233, 253, 0.8)';
                } else if (index === 1) { // GitHub
                    this.style.borderColor = '#ff79c6';
                    this.style.color = '#ff79c6';
                    this.style.boxShadow = '0 0 20px rgba(255, 121, 198, 0.5)';
                    this.style.textShadow = '0 0 15px rgba(255, 121, 198, 0.8)';
                }
                
                // Create hover particles
                createHoverParticles(this);
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.animation = '';
                this.style.borderColor = 'rgba(139, 233, 253, 0.4)';
                this.style.color = '#8be9fd';
                this.style.boxShadow = '';
                this.style.textShadow = '';
            });
        });
    }
    
    function createHoverParticles(element) {
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(139, 233, 253, 0.8);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1000;
                animation: floatParticle 1s ease-out forwards;
            `;
            
            element.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
        
        // Add particle animation
        if (!document.querySelector('#hover-particle-styles')) {
            const style = document.createElement('style');
            style.id = 'hover-particle-styles';
            style.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-20px) scale(0);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Enhanced scroll effects with tech parallax
    function initScrollEffects() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Tech parallax effect
            const homeImg = document.querySelector('.home-img');
            if (homeImg) {
                const rate = scrolled * -0.1;
                homeImg.style.transform = `translateY(${rate}px) rotateY(${scrolled * 0.01}deg)`;
            }
            
            // Parallax for background elements
            const homeSection = document.querySelector('.home');
            if (homeSection) {
                homeSection.style.transform = `translateY(${scrolled * 0.05}px)`;
            }
        });
    }
    
    // Enhanced button interactions with tech effects
    function enhanceButton() {
        const btn = document.querySelector('.btn');
        if (!btn) return;
        
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease-in-out';
            createButtonGlow(this);
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
        
        btn.addEventListener('click', function(e) {
            createClickRipple(e, this);
        });
    }
    
    function createButtonGlow(element) {
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #8be9fd, #ff79c6, #8be9fd);
            border-radius: 30px;
            z-index: -1;
            opacity: 0.7;
            filter: blur(8px);
            animation: glowPulse 2s ease-in-out infinite;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.appendChild(glow);
        
        setTimeout(() => {
            if (glow.parentNode) {
                glow.remove();
            }
        }, 2000);
        
        // Add glow animation
        if (!document.querySelector('#button-glow-styles')) {
            const style = document.createElement('style');
            style.id = 'button-glow-styles';
            style.textContent = `
                @keyframes glowPulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    function createClickRipple(event, element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(139, 233, 253, 0.8);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            transform: translate(-50%, -50%) scale(0);
            pointer-events: none;
            z-index: 1000;
            animation: clickRipple 0.6s ease-out;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Add click ripple animation
        if (!document.querySelector('#click-ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'click-ripple-styles';
            style.textContent = `
                @keyframes clickRipple {
                    to {
                        transform: translate(-50%, -50%) scale(20);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Initialize all functions
    initTypingAnimation();
    initImagePopOut();
    initSocialMediaPopOut();
    enhanceSocialIcons();
    initScrollEffects();
    enhanceButton();
});