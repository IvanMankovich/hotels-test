import { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';

import './style.scss';

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
