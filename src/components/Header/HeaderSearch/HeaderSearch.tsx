import React from 'react';
import SearchInput from '../../UI/Inputs/SearchInput/SearchInput';
import IconMark from '../../UI/Icons/IconMark';
import IconSearch from '../../UI/Icons/IconSearch';
import styles from './HeaderSearch.module.scss';
import WhiteButton from '../../UI/Buttons/WhiteButton/WhiteButton';

const HeaderSearch = () => {
  return (
    <div className={styles.searchWrapper}>
      <SearchInput className={styles.searchInput} icon={<IconSearch/>} placeholder={'На какую должность вы ищете кандидата?'}/>
      <SearchInput className={styles.markInput} icon={<IconMark/>} placeholder={'Город'}/>
      <WhiteButton className={styles.search} text={'Найти кандидатов'}/>
    </div>
  );
};

export default HeaderSearch;