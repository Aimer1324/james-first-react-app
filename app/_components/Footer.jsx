import Image from 'next/image';
import './Footer.css';

export function Footer() {
  return (
    <div id="footer">
      <div id="footer-items">
        <div id="footer-text">
          <h2>Contact Me</h2>
          <p>Future Phone Number Here</p>
          <p>Future Email Address Here</p>
        </div>
        <div id="footer-image">
          <Image src="/mylogo.jpg" alt="My Logo" width={170} height={170} />
        </div>
      </div>
    </div>
  );
}

// TODO: Make website dynamic for desktop
// TODO: Add more content to hero section
// TODO: Fix burger menu
//           - Add icon to the burger icon
//           - Fix it so that you can close the menu by either clicking off of it,
//             or with an x button that replaces the burger icon
