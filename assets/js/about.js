const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// chiffres

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target, 10);
    let count = 0;
    const increment = target / 200;
    let hasStarted = false; // Empêche le compteur de se relancer plusieurs fois

    counter.innerText = '0'; // Initialiser à 0

    const updateCounter = () => {
      count = Math.min(count + increment, target); // Évite de dépasser la valeur cible
      counter.innerText = `${Math.floor(count)}`;

      if (count < target) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = `${target}+`; // Ajout du '+' une seule fois
      }
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasStarted) {
        hasStarted = true; // Marque le compteur comme déclenché
        updateCounter();
        observer.unobserve(counter); // Désactive l'observateur après exécution
      }
    }, { threshold: 0.5 }); // Déclenche l'animation lorsque 50% de l'élément est visible

    observer.observe(counter);
  });
});