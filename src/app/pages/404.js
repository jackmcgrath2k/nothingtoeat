'use client';

import { Suspense } from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
}

export default function Custom404() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFound />
    </Suspense>
  );
}
