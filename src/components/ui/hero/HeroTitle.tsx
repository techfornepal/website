import React from 'react';

export const HeroTitle: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="font-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[color:var(--primary)]">
        Empowering Nepal through
      </div>
      <div className="font-title text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] bg-clip-text text-transparent pb-2">
        Technology
      </div>
    </div>
  );
};