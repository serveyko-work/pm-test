import React, { FC } from 'react';
import styles from './SearchInput.module.scss';
import cn from 'classnames';

interface Props {
  icon?: JSX.Element;
  placeholder: string;
  className?: string;
}

const SearchInput: FC<Props> = ({placeholder, icon, className}): JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper,
      // @ts-ignore
      {[className]: className})}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input className={styles.searchInput} placeholder={placeholder}/>
    </div>
  );
};

export default SearchInput;