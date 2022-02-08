import React, { FC } from 'react';
import styles from './Header.module.scss';
import HeaderSettings from './HeaderSettings/HeaderSettings';
import User from '../UI/Icons/User';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header:FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <HeaderSettings/>
      <div className={styles.currentUser}>
        <User/>
        <p className={styles.user}>Юра Марченко</p>
      </div>
      <HeaderSearch/>
    </header>
  );
};

export default Header;
