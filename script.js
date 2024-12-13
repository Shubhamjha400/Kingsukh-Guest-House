document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    let observer;
  
    const updateCount = (counter) => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
  
      const increment = target / 200; // Adjust this value for speed
      const delay = 20; // Adjust this value for speed
  
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(() => updateCount(counter), delay);
      } else {
        counter.innerText = target;
      }
    };
  
    const observerOptions = {
      threshold: 0.5 // Adjust this value to trigger the animation when half the element is visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          counter.innerText = '0'; // Reset the counter
          updateCount(counter);
        }
      });
    };
  
    observer = new IntersectionObserver(observerCallback, observerOptions);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  