});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation to skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
  tag.addEventListener('mouseover', () => {
    tag.style.transform = 'scale(1.1)';
  });
  tag.addEventListener('mouseout', () => {
    tag.style.transform = 'scale(1)';
  });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const animateSection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(animateSection, {
  root: null,
  threshold: 0.1
});

sections.forEach(section => {
  sectionObserver.observe(section);
});
