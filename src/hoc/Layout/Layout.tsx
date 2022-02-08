import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.scss'
import Filter from '../../components/Filter/Filter';

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({children}): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header/>
      <div className={styles.content}>
        <div className={styles.children}>
          {children}
        </div>
        <Filter/>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
