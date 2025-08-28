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
