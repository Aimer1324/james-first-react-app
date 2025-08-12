'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10); // adjust offset as needed
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#a7c3e8',
        padding: '0 2rem',
        height: `${isScrolled ? '3rem' : '5rem'}`,
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
        transition: `
        height 150ms
        `,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div>your friendly neighbourhood software geek at your service</div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            gap: '0.5rem',
            width: '15rem',
          }}
        >
          <Link href="/#hero-section">Home</Link>
          <Link href="/#about-me">About Me</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}

function NavBarNavigation() {
  return (
    <nav>
      {/* TODO: Create a dynamic list of links - in general, not burger menu*/}
      <ul></ul>
    </nav>
  );
}

// TODO: Create a reusable link component, such as hovering over links changes the color or shade
//       Make it compatible and resuable with the previous todo above

// TODO: Use the new NavBarNavigation in place of the div from 44 to 55
