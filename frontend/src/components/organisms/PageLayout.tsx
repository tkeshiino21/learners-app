import React, { FC } from 'react';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Sidebar from './Sidebar';
import { Flex } from '../atoms';

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Flex>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {children}
          <Footer />
        </main>
      </Flex>
    </>
  );
};

export default PageLayout;
