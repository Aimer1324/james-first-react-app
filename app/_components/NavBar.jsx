'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './NavBar.css';

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
      id="navbar"
      style={{
        height: `${isScrolled ? '3rem' : '5rem'}`,
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
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        id="nav-toggle"
        onClick={() => {
          setIsOpened((param) => !param);
        }}
      >
        Asd
      </button>
      <nav id="navigation" style={{ display: `${isOpened ? 'flex' : 'none'}` }}>
        {/* TODO: Create a dynamic list of links - in general, not burger menu*/}
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <HoverLink href={link.href}>{link.text}</HoverLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
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
        backgroundColor: isHovered ? '#ffffff' : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}
