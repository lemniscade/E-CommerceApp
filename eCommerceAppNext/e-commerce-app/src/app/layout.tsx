import Navbar from '../../src/app/components/Navbar';
import  Footer from '../../src/app/components/Footer';
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
