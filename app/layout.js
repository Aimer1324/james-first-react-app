import './reset.css';
import './globals.css';
import { NavBar } from './_components/NavBar';
import { Footer } from './_components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'My First React App',
  description: "This is James' first React App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: '0 2rem', position: 'relative', height: '100%' }}>
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
        <main style={{ paddingBottom: '15rem', position: 'relative' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
