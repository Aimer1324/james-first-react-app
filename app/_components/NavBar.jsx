'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listLinks = [
    { href: '/#hero-section', text: 'Home' },
    { href: '/#about-me', text: 'About Me' },
    { href: '/#projects', text: 'Projects' },
  ];

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
        <p style={{ margin: '0' }}>your friendly neighbourhood software geek at your service</p>

        <NavBarNavigation links={listLinks} />
      </div>
    </div>
  );
}

function NavBarNavigation({ links }) {
  return (
    <nav>
      {/* TODO: Create a dynamic list of links - in general, not burger menu*/}
      <ul
        style={{
          display: 'flex',
          justifyContent: 'end',
          height: '100%',
          gap: '1rem',
          width: '17rem',
          listStyle: 'none',
        }}
      >
        {links.map((link, index) => (
          <li
            key={index}
            style={{
              height: '100%',
            }}
          >
            <HoverLink href={link.href}>{link.text}</HoverLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// TODO: Create a reusable link component, such as hovering over links changes the color or shade
//       Make it compatible and resuable with the previous todo above

// TODO: Use the new NavBarNavigation in place of the div from 44 to 55

function HoverLink({ href, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        color: isHovered ? '#000000' : 'none',
        backgroundColor: isHovered ? '#ffffff' : 'transparent',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        height: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}
