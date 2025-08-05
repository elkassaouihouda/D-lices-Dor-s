 // Product filtering
        function filterProducts(category) {
            const products = document.querySelectorAll('.product-card');
            const buttons = document.querySelectorAll('.category-btn');
            
            // Update button states
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter products
            products.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'block';
                    product.style.animation = 'slideInUp 0.6s ease-out';
                } else {
                    product.style.display = 'none';
                }
            });
        }

        // Order product
        function orderProduct(productName, price) {
            if (price === 'devis') {
                alert(`Demande de devis pour "${productName}"\n\nNous allons vous contacter sous 24h pour établir un devis personnalisé selon vos besoins.`);
                // Scroll to contact form
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert(`Produit ajouté: ${productName}\nPrix: ${price} DH\n\nPour finaliser votre commande, appelez-nous au +212 5 22 31 45 67 ou utilisez le formulaire de contact.`);
                showNotification(`${productName} ajouté à votre commande!`);
            }
        }

        // Contact form submission
        function submitContactForm(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            showNotification('Votre demande a été envoyée avec succès! Nous vous contacterons sous 24h.');
            event.target.reset();
            
            console.log('Contact form data:', data);
        }

        // Notification system
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 120px;
                right: 20px;
                background: linear-gradient(45deg, #d4a574, #f4e4c1);
                color: #8b4513;
                padding: 20px 30px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(212, 165, 116, 0.4);
                z-index: 3000;
                font-weight: bold;
                font-size: 1rem;
                max-width: 350px;
                animation: slideInRight 0.5s ease-out;
                border-left: 5px solid #8b4513;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease-in';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 500);
            }, 4000);
        }

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling
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

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
        });

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Welcome message
            setTimeout(() => {
                showNotification('Bienvenue chez Délices Dorés! 🧁 Découvrez nos créations artisanales.');
            }, 1500);

            // Set minimum date for contact form
            const dateInput = document.getElementById('date-souhaitee');
            if (dateInput) {
                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                dateInput.min = tomorrow.toISOString().split('T')[0];
            }
        });

        // Product card hover effects
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.03)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });