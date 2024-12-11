import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://i.imgur.com/6yx06IJ.png"
        alt="Vioma Agro Logo"
        className="h-full w-auto object-contain"
        style={{ 
          minWidth: '100px',
          maxHeight: '40px'
        }}
      />
    </div>
  );
}