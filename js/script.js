// Confirm connection
console.log("JS connected");

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create matchMedia
let mm = gsap.matchMedia();

mm.add("(min-width: 1140px)", () => {
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    endTrigger: ".icon",
    end: "top center",
    pin: ".cta-button",
    pinSpacing: false,
  });
});



const header = document.querySelector('.site-header');

// Create a ScrollTrigger to change the color of the header and fix it at the top
gsap.to(header, {
  backgroundColor: "rgba(22, 22, 22, 0.7)",
  duration: 0.3,
  scrollTrigger: {
    trigger: header, // Trigger the color change when scrolling
    start: "top top", // Start when the top of the header reaches the top of the viewport
    end: "bottom top", // End when the bottom of the header reaches the top of the viewport
    scrub: 0.3, // Smooth transition of the color change
    toggleClass: { className: "scrolled", targets: header }, // Adds a 'scrolled' class when scrolled
  },
});

const hazeOverlay = document.querySelector('.haze-overlay');

// Create the scroll animation for the haze-overlay
gsap.to(hazeOverlay, {
  y: '-50%', // Move the haze-overlay up by 50% slower than the normal scroll
  ease: 'power2.out',
  scrollTrigger: {
    trigger: 'body',  // Scroll based on the overlay-container
    start: 'top',            // Start the animation when the top of the container reaches the bottom of the viewport
    end: 'bottom top',              // End when the bottom of the container reaches the top of the viewport
    scrub: true,                    // Smooth the animation with scrub
  }
});

gsap.utils.toArray('.solid-square').forEach((icon, i) => {
gsap.to(icon, {
    scrollTrigger: {
    trigger: '.solid-square',
    start: "top 70%", // when icon enters viewport
    toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: i * 0.2 // stagger effect for multiple icons
});
});


gsap.utils.toArray('.sect4square').forEach((icon, i) => {
gsap.to(icon, {
    scrollTrigger: {
    trigger: '.sect4square',
    start: "top 70%", // when icon enters viewport
    toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out",
    delay: i * 0.2 // stagger effect for multiple icons
});
});

// Create scroll-based parallax for .normalbox
gsap.to(".normalbox", {
  x: "20%", // Scrolls slower than page
  ease: "none",
  scrollTrigger: {
    trigger: ".sect5", 
    start: "top bottom",
    scrub: true,
  }
});

// Create scroll-based parallax for .abbox
gsap.to(".abbox", {
  x: "-30%", // Scrolls even slower
  ease: "none",
  scrollTrigger: {
    trigger: ".sect5",
    start: "top bottom",
    scrub: true,
  }
});
  function showContent(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    contents.forEach((content, i) => {
      content.classList.toggle('active', i === index);
    });
  }
document.getElementById('qc-toggle').addEventListener('click', function () {
  const cxr = document.querySelector('.cxr8');
  const text = document.querySelector('.eviswitchtext');
  const isOn = cxr.getAttribute('data-qc') === 'on';

  cxr.setAttribute('data-qc', isOn ? 'off' : 'on');
  text.textContent = `QCReport: ${isOn ? 'Off' : 'On'}`;
});

document.getElementById('qc-toggle2').addEventListener('click', function () {
  const cxr = document.querySelector('.cxr82');
  const text = document.querySelector('.eviswitchtext2');
  const isOn = cxr.getAttribute('data-qc2') === 'on';

  cxr.setAttribute('data-qc2', isOn ? 'off' : 'on');
  text.textContent = `QCReport: ${isOn ? 'Off' : 'On'}`;
});

document.getElementById('qc-toggle3').addEventListener('click', function () {
  const cxr = document.querySelector('.cxr83');
  const text = document.querySelector('.eviswitchtext3');
  const isOn = cxr.getAttribute('data-qc3') === 'on';

  cxr.setAttribute('data-qc3', isOn ? 'off' : 'on');
  text.textContent = `QCReport: ${isOn ? 'Off' : 'On'}`;
});

const hamburger = document.querySelector('.hamburger');
const navs = document.querySelector('.navs');
const navLinks = document.querySelectorAll('.button-link');

hamburger.addEventListener('click', () => {
  navs.classList.toggle('show');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navs.classList.remove('show');
    hamburger.classList.remove('active');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[class^='show-metrics-btn']");

  buttons.forEach((btn) => {
    btn.addEventListener("touchstart", () => btn.classList.add("metrics-active"));
    btn.addEventListener("touchend", () => btn.classList.remove("metrics-active"));
    btn.addEventListener("mousedown", () => btn.classList.add("metrics-active"));
    btn.addEventListener("mouseup", () => btn.classList.remove("metrics-active"));
    btn.addEventListener("mouseleave", () => btn.classList.remove("metrics-active"));

    btn.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        // Extract suffix: "2", "3", or "" for default
        const suffix = btn.className.match(/btn(\d*)$/)?.[1] || "";
        const metrics = document.querySelector(".evistext" + suffix);
        if (!metrics) return;

        const isVisible = metrics.style.display === "block";
        metrics.style.display = isVisible ? "none" : "block";
        btn.textContent = isVisible ? "Show Metrics" : "Hide Metrics";
      }
    });
  });
});

