'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './NavBar.css';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

export default dynamic(() => Promise.resolve(NavBar), {
  ssr: false,
});

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const listLinks = [
    { href: '/#navbar', text: 'Home' },
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

  const catMenu = useRef(null);
  const navButton = useRef(null);

  const closeOpenMenu = (e) => {
    if (isOpened && !catMenu.current?.contains(e.target) && !navButton.current?.contains(e.target)) {
      setIsOpened(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenu);

  return (
    <>
      <button
        id="nav-toggle"
        ref={navButton}
        onClick={() => {
          setIsOpened((param) => !param);
        }}
        className={isOpened ? 'open' : ''}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav id="navigation" ref={catMenu} style={{ display: `${isOpened ? 'flex' : ''}` }}>
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
