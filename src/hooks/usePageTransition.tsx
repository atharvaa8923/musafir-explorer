
import { useEffect } from 'react';

// This hook adds a simple fade-in animation to pages when they mount
const usePageTransition = () => {
  useEffect(() => {
    // Add fade-in animation to the main content
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('opacity-0');
      
      // Trigger a reflow to make sure the animation works
      void mainElement.offsetWidth;
      
      // Add transition classes
      mainElement.classList.add('transition-opacity', 'duration-500');
      
      // Start animation after a small delay
      setTimeout(() => {
        mainElement.classList.remove('opacity-0');
      }, 50);
    }
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
    
    return () => {
      // Clean up if needed
      if (mainElement) {
        mainElement.classList.remove('transition-opacity', 'duration-500');
      }
    };
  }, []);
};

export default usePageTransition;
