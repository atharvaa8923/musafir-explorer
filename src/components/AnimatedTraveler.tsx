import React, { useEffect, useRef } from 'react';
import { Backpack, MapPin, Compass, Navigation, Music, Coffee, Camera } from 'lucide-react';

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
        {/* Full Boy Character */}
        <div className="relative w-40 h-72">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#F8D3AC] rounded-full border-2 border-[#6E4C1E] z-20">
            {/* Face */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 flex justify-between">
              {/* Eyes */}
              <div className="w-3 h-4 bg-[#222] rounded-full"></div>
              <div className="w-3 h-4 bg-[#222] rounded-full"></div>
            </div>
            {/* Smile */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-10 h-5 border-b-2 border-[#222] rounded-b-full"></div>
            
            {/* Hat */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-musafir-trekking rounded-t-full z-10"></div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-musafir-trekking z-10 rounded-t-full"></div>
          </div>
          
          {/* Neck */}
          <div className="absolute top-22 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-[#F8D3AC] z-10"></div>
          
          {/* Body - Shirt */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-28 h-24 bg-musafir-spiritual rounded-t-xl z-10"></div>
          
          {/* Arms */}
          <div className="absolute top-28 left-3 w-8 h-20 bg-musafir-spiritual rounded-full z-0 transform -rotate-12 origin-top"></div>
          <div className="absolute top-28 right-3 w-8 h-20 bg-musafir-spiritual rounded-full z-30 transform rotate-12 origin-top"></div>
          
          {/* Hand Left */}
          <div className="absolute top-46 left-1 w-6 h-6 bg-[#F8D3AC] rounded-full z-0"></div>
          
          {/* Hand Right */}
          <div className="absolute top-46 right-1 w-6 h-6 bg-[#F8D3AC] rounded-full z-30"></div>
          
          {/* Legs */}
          <div className="absolute top-52 left-1/2 transform -translate-x-1/2 flex gap-2 z-0">
            <div className="w-10 h-28 bg-musafir-earth rounded-b-xl"></div>
            <div className="w-10 h-28 bg-musafir-earth rounded-b-xl"></div>
          </div>
          
          {/* Shoes */}
          <div className="absolute top-79 left-1/2 transform -translate-x-1/2 flex gap-4 z-0">
            <div className="w-12 h-5 bg-[#333] rounded-t-md rounded-b-md -ml-2"></div>
            <div className="w-12 h-5 bg-[#333] rounded-t-md rounded-b-md -mr-2"></div>
          </div>
          
          {/* Backpack */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-musafir-trekking rounded-lg z-0">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-[#333] rounded-full"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-[#444] rounded-md flex items-center justify-center">
              <Backpack className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Camera */}
          <div className="absolute top-46 right-10 z-40 animate-bounce">
            <Camera className="w-6 h-6 text-[#333]" />
          </div>
        </div>
        
        {/* Additional Accessories */}
        <div className="absolute -right-8 top-24 bg-musafir-water p-2 rounded-lg shadow-md animate-pulse">
          <Coffee className="w-6 h-6 text-white" />
        </div>
        
        <div className="absolute -left-6 top-16 bg-musafir-meditation p-2 rounded-full shadow-md animate-spin-slow">
          <Music className="w-6 h-6 text-white" />
        </div>
        
        <div className="absolute -top-8 left-10 animate-bounce">
          <MapPin className="w-8 h-8 text-musafir-forest fill-musafir-forest" />
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
          <p className="text-sm font-bold text-musafir-spiritual">Let's explore India!</p>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTraveler;
