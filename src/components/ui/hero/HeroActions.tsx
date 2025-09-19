import React from 'react';

export const HeroActions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        className="rounded-lg border border-white/30 bg-white/20 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        style={{ fontFamily: 'var(--font-opensans)' }}
      >
        Start Creating
      </button>
    </div>
  );
};
