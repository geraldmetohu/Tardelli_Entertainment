// ===============================
// Fade-In Animation on Scroll
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  faders.forEach(section => {
    appearOnScroll.observe(section);
  });
});

// ===============================
// Carousel Auto Slide + Swipe
// ===============================
const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('.carousel-image');
let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

setInterval(nextImage, 3000);
showImage(index);


// Swipe gesture support
let touchStartX = 0;

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX - 50) {
    nextImage(); // swipe left
  } else if (touchEndX > touchStartX + 50) {
    index = (index - 1 + images.length) % images.length;
    showImage(index); // swipe right
  }
});

// ===============================
// Contact Form Submission Feedback
// ===============================
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-response").style.display = "block";
  this.reset();
});

