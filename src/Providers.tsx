import React from 'react';
import Context from './context/Context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Context>{children}</Context>
    </>
  );
}
