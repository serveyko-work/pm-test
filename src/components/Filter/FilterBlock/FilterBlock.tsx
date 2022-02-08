import React, { FC } from 'react';
import styles from './FilterBlock.module.scss';
import cn from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  customTitleStyle?: string;
}

const FilterBlock: FC<Props> = ({children, title, customTitleStyle}): JSX.Element => {
  return (
    <div className={styles.filterBLock}>
      <h3 className={cn(styles.title, customTitleStyle)}>{title}</h3>
      {children}
    </div>
  );
};

export default FilterBlock;