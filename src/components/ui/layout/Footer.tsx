import React from 'react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--footer-bg)]">
      <Container>
        <div className="py-4">
          <p
            className="text-center text-xs text-[color:var(--text-muted)] sm:text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            &copy; {year} Tech For Nepal
          </p>
        </div>
      </Container>
    </footer>
  );
};
