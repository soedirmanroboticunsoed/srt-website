'use client';

import React from 'react';
import NavigationMenuDemo from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationMenuDemo />
      {children}
    </>
  );
}
