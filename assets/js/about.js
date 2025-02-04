const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;
  const increment = target / 200;

  counter.innerText = '0'; // Initialiser à 0

  const updateCounter = () => {
    count += increment;
    counter.innerText = `${Math.floor(count)}`;
    if (count < target) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = `${target}+`;
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCounter();
      observer.unobserve(counter);
    }
  });

  observer.observe(counter);
});