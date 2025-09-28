import React from 'react';
import './globals.css';
import clsx from 'clsx';
import Container from '@/components/UI/Container';
import Header from '@/components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Raleway, Manrope, Sansation } from 'next/font/google';

const sansation = Sansation({
  subsets: ['latin', 'cyrillic'],
  weight: ['400','700'],
  variable: '--font-raleway',
});
const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'], 
  display: 'swap',
  variable: '--font-manrope', 
});

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className={`${manrope.variable} ${raleway.variable} ${sansation.variable} font-sans`}>
      <body>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  ); 
}
