    
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Puhrum - Hamburger Menu Fixed!');

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        console.log('✅ Hamburger elements found!');

        hamburgerBtn.onclick = function() {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            console.log('Hamburger toggled!');
        };

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.onclick = function() {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            };
        });

        document.onclick = function(e) {
            if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        };
    } else {
        console.error('❌ Hamburger elements NOT found!');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = function() {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        };
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.article-card, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    console.log('✅ All scripts loaded successfully!');
});
    


