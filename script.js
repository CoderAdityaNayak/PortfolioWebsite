// Initialize Locomotive Scroll IMMEDIATELY (before DOMContentLoaded)
let scroll;

function initLocomotiveScroll() {
  // Destroy previous instance if it exists
  if (scroll) {
    scroll.destroy();
  }

  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  });

  // Listen to scroll events
  scroll.on('scroll', (instance) => {
    // Update on every scroll
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLocomotiveScroll);
} else {
  initLocomotiveScroll();
}

// Update scroll on load
window.addEventListener('load', () => {
  if (scroll) {
    scroll.update();
  }
});

// Update on resize
window.addEventListener('resize', () => {
  if (scroll) {
    scroll.update();
  }
});

// ============================================
// Icon Link Functionality
// ============================================
const icons = document.querySelectorAll('.icons i');
const linktext = document.getElementById('linktext');

icons.forEach(icon => {
  const link = icon.getAttribute('data-link');

  icon.addEventListener('mouseenter', () => {
    linktext.classList.remove('active');
    linktext.innerHTML = `<span data-text="${link}">${link}</span>`;
  });

  icon.addEventListener('click', () => {
    navigator.clipboard.writeText(link);
    const text = "Copied to clipboard";
    linktext.innerHTML = `<span data-text="${text}">${text}</span>`;
    linktext.classList.remove('active');
    void linktext.offsetWidth;
    linktext.classList.add('active');
  });

  icon.addEventListener('mouseleave', () => {
    linktext.classList.remove('active');
    linktext.style.opacity = '0.5';
  });
});

// ============================================
// Modal Functionality
// ============================================
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

function openModal() {
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

// Expose to global scope for HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// ============================================
// Typing Effect - Words
// ============================================
const words = [
  "Portfolio",
  "पोर्टफोलियो",
  "ಪೋರ್ಟ್‌ಫೋಲಿಯೋ",
  "पोर्टफोलिओ",
  "作品集",
  "Portafoglio",
  "Portefeuille",
  "Portafolio"
];

let i = 0;
let j = 0;
let isDeleting = false;
const text1 = document.getElementById("changingtext");

function typeEffect() {
  const currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  text1.textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 3000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ============================================
// Dropdown Toggle
// ============================================
function toggle() {
  const content = document.getElementById("content");
  if (content) {
    content.classList.toggle("show");
  }
}

window.toggle = toggle;

// ============================================
// Role Changing Effect
// ============================================
const roles = [
  "Founder",
  "Builder",
  "UI/UX Designer",
  "AI Developer",
  "Web Designer",
  "Producer",
  "Team Lead",
  "Marketing Manager",
  "Human Resource"
];

let n = 0;
const el = document.getElementById("role");

function changeRole() {
  if (!el) return;
  
  el.classList.add("hide");
  setTimeout(() => {
    el.textContent = roles[n];
    el.classList.remove("hide");
    n = (n + 1) % roles.length;
  }, 400);
}

if (el) {
  changeRole();
  setInterval(changeRole, 2000);
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.querySelectorAll('a[data-scroll-to]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target && scroll) {
      scroll.scrollTo(target, {
        offset: -80,
        duration: 1200,
        easing: [0.25, 0.00, 0.35, 1.00]
      });
    }
  });
});
