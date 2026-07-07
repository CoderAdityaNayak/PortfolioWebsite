const icons = document.querySelectorAll('.icons i');
const linktext = document.getElementById('linktext');

icons.forEach(icon => {
    const link = icon.getAttribute('data-link');

    // hover → show link (reset to black)
    icon.addEventListener('mouseenter', () => {
        linktext.classList.remove('active');
        linktext.innerHTML = `<span data-text="${link}">${link}</span>`;
    });

    // click → copy + green wipe
    icon.addEventListener('click', () => {
        navigator.clipboard.writeText(link);

        const text = "Copied to clipboard";
        linktext.innerHTML = `<span data-text="${text}">${text}</span>`;

        linktext.classList.remove('active');
        void linktext.offsetWidth; // reset animation
        linktext.classList.add('active');
    });

    // leave → go back to black + hide
    icon.addEventListener('mouseleave', () => {
        linktext.classList.remove('active'); // removes green
        linktext.style.opacity = 10;

        
    });
});
// Get modal elements
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

// Open modal function
function openModal() {
    modal.classList.add('show');
}

// Close modal function
function closeModal() {
    modal.classList.remove('show');
}

// Close when clicking the X button
modalClose.addEventListener('click', closeModal);

// Close when clicking outside the modal box
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
function downloadResume(){
    const a = document.createElement('a');
    a.href = 'resume.pdf';
    a.download = 'adi.pdf';
    a.click();
}




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
    setTimeout(typeEffect, 3000); // wait 3s
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

function toggle() {
  document.getElementById("content").classList.toggle("show");
}

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
  el.classList.add("hide");

  setTimeout(() => {
    el.textContent = roles[n];
    el.classList.remove("hide");
    n = (n + 1) % roles.length;
  }, 400);
}

changeRole();
setInterval(changeRole, 2000);



        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.06,
  multiplier: 1.1
});

        // Update scroll on window resize and load
        window.addEventListener('load', () => {
            scroll.update();
        });

        window.addEventListener('resize', () => {
            scroll.update();
        });

        // Handle navbar links
       document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    scroll.scrollTo(target, {
      offset: -100, // adjust for your fixed navbar height
      duration: 1200,
      easing: [0.25, 0.00, 0.35, 1.00]
    });
  });
});
    
