import './reset.css';
import './globals.css';
import { NavBar } from './_components/NavBar';

export const metadata = {
  title: 'My First React App',
  description: "This is James' first React App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
