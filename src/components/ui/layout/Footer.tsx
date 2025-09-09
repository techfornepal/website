import React from 'react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-[color:var(--background)] border-t border-[color:var(--border-light)] transition-colors duration-200">
      <Container>
        <div className="py-6">
          <p className="text-center text-xs text-[color:var(--text-muted)]">
            © {year} Tech For Nepal
          </p>
        </div>
      </Container>
    </footer>
  );
};


