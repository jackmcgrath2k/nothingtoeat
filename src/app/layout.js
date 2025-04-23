'use client';
import './globals.css';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const searchParams = useSearchParams();
  const [isVegetarian, setIsVegetarian] = useState(false);

  useEffect(() => {
    const vegetarian = searchParams.get('vegetarian') === 'true';
    setIsVegetarian(vegetarian);
  }, [searchParams]);

  return (
    <html lang="en">
      <body className={isVegetarian ? 'bg-green-200 transition-colors duration-500' : 'bg-neutral-900 transition-colors duration-500'}>
        {children}
      </body>
    </html>
  );
}
