// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Toggle - removed duplicate, handled in initMobileMenu()

// Mobile menu close functionality is now handled in initSmoothScrolling

// Navbar Active State Management
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scrolling for Navigation Links (removed to prevent conflict with GSAP)

// Smooth Scrolling for CTA Buttons with GSAP
// Removed custom scroll animation for View Our Services - now uses standard anchor navigation

// Navbar Background Change on Scroll
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('backToTop');

function updateNavbarBackground() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#FFF8F0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#FFF8F0';
        navbar.style.boxShadow = 'none';
    }
}

// Scroll Event Listener
window.addEventListener('scroll', () => {
    updateActiveNavLink();
    updateNavbarBackground();

    // Toggle floating back-to-top visibility
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// Load More Services Functionality
const loadMoreBtn = document.querySelector('.load-more-btn');
const servicesGrid = document.querySelector('.services-grid');

loadMoreBtn.addEventListener('click', () => {
    // Create additional service cards
    const additionalServices = [
        {
            title: 'Acrylic Cutting',
            description: 'Precision acrylic cutting services for custom shapes and designs with smooth, professional edges.',
            imageClass: 'service-image-7'
        },
        {
            title: 'Vinyl Stickers',
            description: 'High-quality vinyl stickers for branding, decoration, and promotional purposes with long-lasting adhesion.',
            imageClass: 'service-image-8'
        },
        {
            title: 'Trophy Engraving',
            description: 'Professional trophy and award engraving services for corporate events, sports, and achievements.',
            imageClass: 'service-image-9'
        }
    ];

    additionalServices.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.opacity = '0';
        serviceCard.style.transform = 'translateY(20px)';
        
        // Determine layout based on existing cards count (6 existing cards)
        const isContentFirst = (6 + index) % 2 === 1; // Cards 7, 9 have content first
        
        if (isContentFirst) {
            serviceCard.innerHTML = `
                <div class="service-content">
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                </div>
                <div class="service-image ${service.imageClass}"></div>
            `;
        } else {
            serviceCard.innerHTML = `
                <div class="service-image ${service.imageClass}"></div>
                <div class="service-content">
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                </div>
            `;
        }
        
        servicesGrid.appendChild(serviceCard);
        
        // Animate the new card
        setTimeout(() => {
            serviceCard.style.transition = 'all 0.5s ease';
            serviceCard.style.opacity = '1';
            serviceCard.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Hide the load more button
    loadMoreBtn.style.display = 'none';
});

// No extra CSS injection needed for services now

// Toast Notification Function
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Toast content
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 400);
    }, 4000);
}

// Initialize EmailJS
(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Contact Form Handling with EmailJS
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple form validation
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
        showToast('Please enter a valid 10-digit phone number.', 'error');
        return;
    }
    
    // Update submit button
    const submitButton = contactForm.querySelector('.btn-primary');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Prepare template parameters for EmailJS
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            service: data.service,
            message: data.message,
            to_email: 'srigurusailaser@gmail.com'
        };
        
        // Send email using EmailJS
        const result = await emailjs.send(
            'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
            templateParams
        );
        
        if (result.status === 200) {
            showToast('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showToast('Failed to send message. Please try again.', 'error');
        }
        
    } catch (error) {
        console.error('EmailJS error:', error);
        showToast('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Enhanced hover effects
function initHoverEffects() {
    // Service cards hover effect
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                ease: "power2.out"
            });
        });
    });
    
    // Button hover effects
    document.querySelectorAll('.btn-primary, .cta-button, .load-more-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                duration: 0.2,
                scale: 1.05,
                ease: "linear"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.2,
                scale: 1,
                ease: "linear"
            });
        });
    });
}

// Phone number click to call
document.querySelectorAll('.contact-item').forEach(item => {
    const phoneText = item.querySelector('p');
    if (phoneText && phoneText.textContent.match(/^\d{10}$/)) {
        phoneText.style.cursor = 'pointer';
        phoneText.style.textDecoration = 'underline';
        phoneText.addEventListener('click', () => {
            window.location.href = `tel:${phoneText.textContent}`;
        });
    }
});

// Email click to open mail client
document.querySelectorAll('.contact-item').forEach(item => {
    const emailText = item.querySelector('p');
    if (emailText && emailText.textContent.includes('@')) {
        emailText.style.cursor = 'pointer';
        emailText.style.textDecoration = 'underline';
        emailText.addEventListener('click', () => {
            window.location.href = `mailto:${emailText.textContent}`;
        });
    }
});

// Number Counter Animation
function animateCounter(element, target, hasPlus) {
    gsap.fromTo(element, 
        { textContent: 0 },
        {
            textContent: target,
            duration: 1,
            ease: "linear",
            snap: { textContent: 1 },
            onUpdate: function() {
                // During animation, show only the number
                element.textContent = Math.round(this.targets()[0].textContent);
            },
            onComplete: function() {
                // After animation, add the + if it was originally there
                if (hasPlus) {
                    element.textContent = target + '+';
                }
            }
        }
    );
}

// Initialize counters when they come into view
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const originalText = counter.textContent;
        const target = parseInt(originalText.replace('+', ''));
        const hasPlus = originalText.includes('+');
        
        // Set initial value to 0
        counter.textContent = '0';
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            onEnter: () => {
                animateCounter(counter, target, hasPlus);
            },
            once: true
        });
    });
}

// GSAP Animations
function initGSAPAnimations() {
    // Hero section animations
    gsap.timeline()
        .from('.hero-title', { duration: 1, y: 50, opacity: 0, ease: "power2.out" })
        .from('.hero-description', { duration: 0.8, y: 30, opacity: 0, ease: "power2.out" }, "-=0.5")
        .from('.hero-buttons', { duration: 0.8, y: 30, opacity: 0, ease: "power2.out" }, "-=0.3")
        .from('.hero-images .hero-image', { duration: 1, scale: 0.8, opacity: 0, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.5");

    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        });
    });

    // Removed hero scrub animation (it was fading content on slight scroll)

    // Service cards animation with scrub
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 130%",
                end: "top 40%",
                scrub: 0.3
            },
            y: 30,
            opacity: 0,
            ease: "linear"
        });
    });

    // Why Choose Us section animation - using contact page animation style
    gsap.timeline({
        scrollTrigger: {
            trigger: '.why-choose-content',
            start: "top 130%",
            end: "top 60%",
            scrub: 0.2
        }
    })
    .from('.why-choose-image', {
        x: -50,
        opacity: 0,
        ease: "linear"
    })
    .from('.features-grid', {
        x: 50,
        opacity: 0,
        ease: "linear"
    }, 0);

    // About text animation with scrub
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: "top 140%",
            end: "top 40%",
            scrub: 2,
        },
        x: -30,
        opacity: 0,
        ease: "linear"
    });

    // Contact form animation with scrub
    gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-content',
            start: "top 130%",
            end: "top 60%",
            scrub: 0.2
        }
    })
    .from('.contact-form', {
        x: -50,
        opacity: 0,
        ease: "linear"
    })
    .from('.contact-info', {
        x: 50,
        opacity: 0,
        ease: "linear"
    }, 0);
}

// Smooth scrolling with GSAP
function initSmoothScrolling() {
    // Override default smooth scrolling with GSAP
    document.querySelectorAll('.nav-link, .footer-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target && typeof gsap !== 'undefined' && gsap.plugins.ScrollToPlugin) {
                // Special offset for About Us to trigger animations
                const offsetY = targetId === '#about' ? 150 : 80;
                
                gsap.to(window, {
                    duration: 1.0,
                    scrollTo: {
                        y: target,
                        offsetY: offsetY
                    },
                    ease: "linear",
                    onComplete: () => {
                        // Update active nav link after scroll
                        setTimeout(updateActiveNavLink, 100);
                    }
                });
            } else {
                // Fallback to native scrolling if GSAP fails
                const targetPosition = target.offsetTop - 80;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Back to top functionality using GSAP ScrollTo
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof gsap !== 'undefined' && gsap.plugins.ScrollToPlugin) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0 },
                ease: "linear"
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Enhanced ticker animation with GSAP
function initEnhancedTicker() {
    const tickers = document.querySelectorAll('.ticker-content');
    
    tickers.forEach(ticker => {
        // Clone content multiple times to create seamless loop
        const tickerContent = ticker.innerHTML;
        ticker.innerHTML = tickerContent + tickerContent + tickerContent;
        
        // Get the width of the original content
        const tickerWidth = ticker.scrollWidth / 3;
        
        // Create GSAP timeline for smooth infinite scrolling
        const tl = gsap.timeline({ repeat: -1 });
        
        tl.fromTo(ticker, 
            { x: 0 }, 
            { 
                x: -tickerWidth,
                duration: 10, // Faster than before (was 40s)
                ease: "none",
                immediateRender: false
            }
        );
        
        // Pause animation on hover
        ticker.addEventListener('mouseenter', () => {
            tl.pause();
        });
        
        ticker.addEventListener('mouseleave', () => {
            tl.resume();
        });
    });
}

// Nav links dropdown animation on page load
function initNavAnimation() {
    gsap.from('.nav-links li', {
        duration: 0.4,
        y: -15,
        opacity: 0,
        stagger: 0.08,
        ease: "linear",
        delay: 0.1
    });
    
    gsap.from('.nav-logo', {
        duration: 0.5,
        y: -20,
        opacity: 0,
        ease: "linear"
    });
    
    gsap.from('.nav-link', {
        duration: 0.5,
        y: -20,
        opacity: 0,
        ease: "linear",
        stagger: 0.1,
        delay: 0.2
    });
    
    gsap.from('.cta-button', {
        duration: 0.5,
        y: -20,
        opacity: 0,
        ease: "linear",
        delay: 0.5,
        onComplete: function() {
            // Ensure button is fully visible after animation
            gsap.set('.cta-button', { opacity: 1, y: 0 });
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Gallery tab functionality
function initGalleryTabs() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const grids = document.querySelectorAll('.gallery-grid');

    if (!tabs.length || !grids.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-gallery');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            grids.forEach(grid => {
                if (grid.classList.contains(`gallery-grid-${target}`)) {
                    grid.classList.add('active');
                } else {
                    grid.classList.remove('active');
                }
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    initNavAnimation();
    initMobileMenu();
    initSmoothScrolling();
    initGSAPAnimations();
    initEnhancedTicker();
    initCounters();
    initHoverEffects();
    initGalleryTabs();
    
    // Initial call to set active nav link
    updateActiveNavLink();
});
