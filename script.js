// Wedding Invite Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const letterContainer = document.getElementById('letter-container');
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const envelopeSeal = document.querySelector('.envelope-seal');
    const vLine = document.querySelector('.v-line');
    const openPrompt = document.querySelector('.open-prompt');
    const mainContent = document.getElementById('main-content');
    const rsvpButtons = document.querySelectorAll('.rsvp-btn');
    
    // Mobile Menu Elements
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const faqToggles = document.querySelectorAll('.faq-toggle');
    const faqModal = document.getElementById('faq-modal');
    const faqClose = document.getElementById('faq-close');
    const faqTitle = document.getElementById('faq-title');
    const faqBody = document.getElementById('faq-body');
    
    // Confetti Elements
    const confettiContainer = document.getElementById('confetti-container');
    
    // FAQ Content
    const faqContent = {
        'plus-one': {
            title: 'Can I bring a plus one?',
            content: `
                <h4>Plus One Policy</h4>
                <p>Due to limited space at our venue, we can only accommodate those formally invited on the invitation. If you received a plus one it will be noted on the invitation in order to RSVP.</p>
            `
        },
        'kids': {
            title: 'Are kids allowed?',
            content: `
                <h4>Children at the Wedding</h4>
                <p>We love your little ones! However, due to the limited space at our venue, we have decided to keep our wedding adults only, except for the kids who are in the wedding party. We encourage you to use this as a date night to get out and have fun!</p>
            `
        },
        'kids-invited': {
            title: 'Are kids invited?',
            content: `
                <h4>Children Invitation Policy</h4>
                <p>Due to limited numbers, we hope you appreciate that children are only invited if named. Your invitation will be made out to "the [Your Last Name] Family" if your children have been invited. "Mr. & Mrs." if only you and your significant other have been invited.</p>
            `
        },
        'guest': {
            title: 'Can I bring a guest/date?',
            content: `
                <h4>Guest Policy</h4>
                <p>Your invitation will be made out to "Your Name and Guest" if a plus one has been given to you. We, unfortunately, cannot accommodate additional guests.</p>
            `
        },
        'rsvp-time': {
            title: 'What if I don\'t RSVP in time?',
            content: `
                <h4>RSVP Deadline</h4>
                <p>If we do not receive your RSVP by the date, it will be marked as "No." We will miss you celebrating with us, however, we have to provide a total guest count to the venue & vendors in the timely manner they have given us. Thank you for understanding.</p>
            `
        }
    };
    
    // Configuration - Easy to customize
    const config = {
        autoOpenDelay: 4000, // Auto-open after 4 seconds if not clicked
        animationDuration: 2500, // Total animation duration
        fadeInDuration: 1000   // Duration of fade in animation
    };
    
    // Function to get URL parameters
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    // Function to personalize envelope from URL
    function personalizeFromUrl() {
        const recipientName = getUrlParameter('recipient');
        if (recipientName) {
            // Decode the URL parameter (handles spaces, &, etc.)
            const decodedName = decodeURIComponent(recipientName);
            WeddingInvite.personalizeEnvelope(decodedName);
        }
    }
    
    // Function to create confetti
    function createConfetti() {
        const confettiCount = 50;
        const shapes = ['square', 'circle', 'triangle', 'star'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;
            
            // Random position
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            confettiContainer.appendChild(confetti);
        }
    }
    
    // Function to clear confetti
    function clearConfetti() {
        confettiContainer.innerHTML = '';
    }
    
    // Initialize the website
    initWebsite();
    
    // Personalize envelope from URL parameters
    personalizeFromUrl();
    
    function initWebsite() {
        // Add click event to letter container
        letterContainer.addEventListener('click', startLetterAnimation);
        
        // Auto-open after delay if not clicked
        setTimeout(() => {
            if (!letterContainer.classList.contains('opening')) {
                startLetterAnimation();
            }
        }, config.autoOpenDelay);
    }
    
    function startLetterAnimation() {
        // Prevent multiple clicks
        if (letterContainer.classList.contains('opening')) return;
        
        // Add opening class to container
        letterContainer.classList.add('opening');
        
        // Hide the prompt
        openPrompt.classList.add('hidden');
        
        // Start confetti animation
        createConfetti();
        
        // Start the animation sequence
        setTimeout(() => {
            // Scale down the seal
            envelopeSeal.classList.add('opening');
            
            // Flip the envelope to show the V-opening
            setTimeout(() => {
                envelopeWrapper.classList.add('opening');
                
                // Open the V-flap
                setTimeout(() => {
                    vLine.classList.add('opening');
                    
                    // Show main content after V-flap opens
                    setTimeout(() => {
                        showMainContent();
                    }, 1500); // Increased delay for smoother transition
                }, 1000); // Increased delay for V-flap opening
            }, 800); // Increased delay for flip after seal animation
            
        }, 600); // Increased initial delay
    }
    
    function showMainContent() {
        // Fade out letter container
        letterContainer.style.opacity = '0';
        
        // Clear confetti when main content shows
        clearConfetti();
        
        // After letter fades out, show main content
        setTimeout(() => {
            letterContainer.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Trigger fade in animation
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 100);
            
            // Add scroll animations to elements
            addScrollAnimations();
        }, 1000);
    }
    
    function addScrollAnimations() {
        // Get all elements that should animate on scroll
        const animatedElements = document.querySelectorAll('.detail-item, .rsvp-section, .additional-info');
        
        // Create intersection observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe each element
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });
    }
    
    // Mobile Menu Functionality
    function initMobileMenu() {
        // Toggle menu
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !faqModal.contains(e.target)) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Smooth scroll for menu links
        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close menu after clicking link
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // FAQ Modal Functionality
    function initFAQModal() {
        // Open FAQ modal
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const faqKey = this.getAttribute('data-faq');
                const faqData = faqContent[faqKey];
                
                if (faqData) {
                    faqTitle.textContent = faqData.title;
                    faqBody.innerHTML = faqData.content;
                    faqModal.classList.add('active');
                    
                    // Keep mobile menu open - don't close it
                    // mobileMenu.classList.remove('active');
                    // menuToggle.classList.remove('active');
                }
            });
        });
        
        // Close FAQ modal
        faqClose.addEventListener('click', function() {
            faqModal.classList.remove('active');
        });
        
        // Close FAQ modal when clicking outside
        faqModal.addEventListener('click', function(e) {
            if (e.target === faqModal) {
                faqModal.classList.remove('active');
                // Prevent this click from bubbling up to the menu close handler
                e.stopPropagation();
            }
        });
        
        // Close FAQ modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && faqModal.classList.contains('active')) {
                faqModal.classList.remove('active');
            }
        });
    }
    
    // RSVP Button Functionality
    function initRSVPButtons() {
        const rsvpButtons = document.querySelectorAll('.rsvp-btn');
        
        rsvpButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Redirect to RSVP form
                const formWindow = window.open('https://docs.google.com/forms/d/e/1FAIpQLSczpSE0gj8uIeMVaw0e7NgGQGJanEbqRmxDIFE0TT3Oc8P-0A/viewform?usp=header', '_blank');
                
                // Check if redirect was successful and show popup
                if (formWindow) {
                    // Show success popup after redirect
                    setTimeout(() => {
                        showRedirectSuccessPopup();
                    }, 1000);
                }
            });
        });
    }
    
    // Show popup after successful redirect
    function showRedirectSuccessPopup() {
        const modal = document.createElement('div');
        modal.className = 'redirect-success-modal';
        modal.innerHTML = `
            <div class="redirect-success-content">
                <h3>🎉 RSVP Form Opened!</h3>
                <p>Thank you for responding to our invitation!</p>
                <p>Please complete the form in the new tab that opened.</p>
                <button class="modal-close-btn">Got it!</button>
            </div>
        `;
        
        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const modalContent = modal.querySelector('.redirect-success-content');
        modalContent.style.cssText = `
            background: #faf8f5;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            max-width: 400px;
            margin: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;
        
        const closeBtn = modal.querySelector('.modal-close-btn');
        closeBtn.style.cssText = `
            background: #8b4513;
            color: #f5f5dc;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
        
        // Close functionality
        const closeModal = () => {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    // Add smooth scroll behavior for any anchor links
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
    
    // Add touch feedback for mobile devices
    if ('ontouchstart' in window) {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Add some subtle animations to the header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            header.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Preload any images or resources if needed
    function preloadResources() {
        // Add any image preloading here if needed
        const images = [
            // Add image URLs here if you add any images later
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Initialize preloading
    preloadResources();
    
    // Add some ambient background animation
    function addAmbientAnimation() {
        const header = document.querySelector('.header');
        if (header) {
            let hue = 0;
            setInterval(() => {
                hue = (hue + 0.1) % 360;
                header.style.background = `linear-gradient(135deg, 
                    hsl(${hue}, 20%, 45%) 0%, 
                    hsl(${hue + 10}, 25%, 50%) 100%)`;
            }, 5000); // Very slow, subtle change
        }
    }
    
    // Start ambient animation after a delay
    setTimeout(addAmbientAnimation, 5000);
    
    // Initialize mobile menu and FAQ functionality
    initMobileMenu();
    initFAQModal();
    initRSVPButtons();
});

// Add some utility functions for easy customization
window.WeddingInvite = {
    // Function to personalize the envelope with recipient name
    personalizeEnvelope: function(recipientName) {
        const addressLine = document.querySelector('.address-line');
        if (addressLine) {
            addressLine.textContent = `To: ${recipientName}`;
        }
    },
    
    // Function to update couple names
    updateCoupleNames: function(name1, name2) {
        const elements = document.querySelectorAll('.couple-names');
        elements.forEach(el => {
            el.textContent = `${name1} & ${name2}`;
        });
        
        // Update envelope address
        const addressElements = document.querySelectorAll('.address-line');
        if (addressElements.length >= 2) {
            addressElements[1].textContent = `From: ${name1} & ${name2}`;
        }
    },
    
    // Function to update wedding date
    updateWeddingDate: function(date) {
        const elements = document.querySelectorAll('.wedding-date');
        elements.forEach(el => {
            el.textContent = date;
        });
    },
    
    // Function to update venue
    updateVenue: function(venue, address) {
        const venueElements = document.querySelectorAll('.detail-item:nth-child(2) p');
        if (venueElements.length >= 2) {
            venueElements[0].textContent = venue;
            venueElements[1].textContent = address;
        }
    },
    
    // Function to restart the letter animation
    restartAnimation: function() {
        const letterContainer = document.getElementById('letter-container');
        const envelopeWrapper = document.querySelector('.envelope-wrapper');
        const envelopeSeal = document.querySelector('.envelope-seal');
        const vLine = document.querySelector('.v-line');
        const openPrompt = document.querySelector('.open-prompt');
        const mainContent = document.getElementById('main-content');
        
        // Reset all classes
        letterContainer.classList.remove('opening');
        envelopeWrapper.classList.remove('opening');
        envelopeSeal.classList.remove('opening');
        vLine.classList.remove('opening');
        openPrompt.classList.remove('hidden');
        mainContent.classList.add('hidden');
        mainContent.classList.remove('visible');
        
        // Reset styles
        letterContainer.style.opacity = '1';
        letterContainer.style.display = 'flex';
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        // Reinitialize
        setTimeout(() => {
            initWebsite();
        }, 100);
    }
}; 