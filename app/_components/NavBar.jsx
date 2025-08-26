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
        height: `${isScrolled ? '4rem' : '5rem'}`,
      }}
    >
      <div id="innernav">
        <p>your friendly neighbourhood software geek at your service</p>

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
        className={isOpened ? 'open' : ''}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav id="navigation" style={{ display: `${isOpened ? 'flex' : ''}` }}>
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
