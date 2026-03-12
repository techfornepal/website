import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const isExternal = (href?: string) => href?.startsWith('http://') || href?.startsWith('https://');

export const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  if (isExternal(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
  }
  return <a href={href} {...props} />;
};
