import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import backgroundImage from '../assets/img/bg-cafe.jpg';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevChallengesIO - Landing page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>

        <div className="bg-gray-500 relative">
          <Image fill src={backgroundImage} className="absolute top-0"/>
        </div>

        {children}

      </body>
    </html>
  );
}
