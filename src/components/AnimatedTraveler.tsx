import React, { useEffect, useRef } from 'react';
import { Backpack, MapPin, Compass, Navigation } from 'lucide-react';

const AnimatedTraveler = () => {
  const travelerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const traveler = travelerRef.current;
    if (!traveler) return;

    // Initial position
    let posX = 50;
    let posY = 50;
    let directionX = 1;
    let directionY = 1;
    
    // Animation frames
    let frame = 0;
    const totalFrames = 120;
    
    const animate = () => {
      frame = (frame + 1) % totalFrames;
      
      // Bounce effect
      if (frame % 20 === 0) {
        directionX = Math.random() > 0.5 ? 1 : -1;
        directionY = Math.random() > 0.5 ? 1 : -1;
      }
      
      // Update position with boundaries
      posX += directionX * 0.5;
      posY += directionY * 0.3;
      
      // Keep within bounds
      if (posX < 10) { posX = 10; directionX *= -1; }
      if (posX > 90) { posX = 90; directionX *= -1; }
      if (posY < 10) { posY = 10; directionY *= -1; }
      if (posY > 60) { posY = 60; directionY *= -1; }
      
      // Apply position and rotation
      traveler.style.left = `${posX}%`;
      traveler.style.top = `${posY}%`;
      
      // Bobbing effect
      const bounce = Math.sin(frame / 8) * 5;
      traveler.style.transform = `translateY(${bounce}px) rotate(${directionX > 0 ? 5 : -5}deg)`;
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div 
      ref={travelerRef}
      className="absolute transition-all duration-300 ease-in-out"
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <div className="relative">
        {/* Character */}
        <div className="w-32 h-32 bg-musafir-spiritual rounded-full flex items-center justify-center relative overflow-visible shadow-lg border-4 border-white">
          <div className="text-white text-5xl font-bold">👨</div>
          
          {/* Backpack */}
          <div className="absolute -right-8 top-10 bg-musafir-trekking p-2 rounded-lg shadow-md animate-pulse">
            <Backpack className="w-8 h-8 text-white" />
          </div>
          
          {/* Compass */}
          <div className="absolute -left-6 bottom-0 bg-musafir-water p-2 rounded-full shadow-md animate-spin-slow">
            <Compass className="w-6 h-6 text-white" />
          </div>
          
          {/* Pin */}
          <div className="absolute -top-8 left-10 animate-bounce">
            <MapPin className="w-8 h-8 text-musafir-forest fill-musafir-forest" />
          </div>
        </div>
        
        {/* Navigation line */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="relative w-24 h-2 bg-gradient-to-r from-musafir-earth to-musafir-meditation rounded-full">
            <div className="absolute -top-3 animate-ping-slow">
              <Navigation className="w-6 h-6 text-musafir-spiritual" />
            </div>
          </div>
        </div>
        
        {/* Speech bubble */}
        <div className="absolute -top-16 right-0 bg-white px-4 py-2 rounded-xl shadow-md animate-float">
          <p className="text-sm font-bold text-musafir-spiritual">Let's explore!</p>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTraveler;
