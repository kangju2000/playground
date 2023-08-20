import { Link, PageProps } from 'gatsby';
import React from 'react';

import { header } from './index.css';

interface LayoutProps {
  location?: PageProps['location'];
  title?: string;
}

export default function Layout({
  location,
  title,
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <div>
      <header className={header}>
        <h1>{title}</h1>
        <Link to={location.pathname}>Home</Link>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
