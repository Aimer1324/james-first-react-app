import Image from 'next/image';
import './Footer.css';

export function Footer() {
  return (
    <div id="footer" style={{ height: '13rem' }}>
      <div id="footer-items" style={{ height: '100%' }}>
        <div id="footer-text">
          <h2 style={{ fontSize: '3rem', margin: '0' }}>Footer</h2>
          <p>This is gonna be the footer</p>
          <p>How do I spread it to the whole width of the page?</p>
        </div>
        <div id="footer-image">
          <Image src="/mylogo.jpg" alt="My Logo" width={170} height={170} />
        </div>
      </div>
    </div>
  );
}
