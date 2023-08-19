import React from 'react';
import { type PropsWithChildren } from 'react';

import Header from '../Header';

interface LayoutProps {
  title: string;
}

export default function Layout({ title, children }: PropsWithChildren<LayoutProps>) {
  return (
    <div>
      <Header title={title} />
      <main>{children}</main>
    </div>
  );
}
