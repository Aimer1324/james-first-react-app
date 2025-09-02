import './reset.css';
import './globals.css';
import NavBar from './_components/NavBar';
import { Footer } from './_components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Powered By Phan',
  description: 'James Phan personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            left: '0',
            top: '0',
            height: '100vh',
          }}
        >
          <Image
            src="/tester.jpg"
            alt="Background image"
            fill
            style={{
              zIndex: '-1',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <main style={{ paddingTop: '5rem', position: 'relative' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
