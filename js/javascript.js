
// Once the page is loaded, search for every element using class reveal-on-scroll
// and add an observer such taht when is becomes visible in the viewport, it fades in
// nicely.  Cosmetic effect.
function onPageLoaded() {
    
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const observerOptions = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.2 
  };

  // Once visible, cancel the observer (we only do this once for each element), and
  // add the revealed class to ensure the transform resets and removes opacity
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); 
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Each element gets it's own observer
  revealElements.forEach(element => {
    observer.observe(element);
  });
};


// MAIN
{
  // Ensure the page is loaded and unpacked first
  document.addEventListener('DOMContentLoaded', onPageLoaded);
}