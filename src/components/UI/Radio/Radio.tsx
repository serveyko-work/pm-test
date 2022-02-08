import React, { FC } from 'react';
import styles from './Radio.module.scss';

interface Props {
  label: string;
}

const Radio: FC<Props> = ({label}): JSX.Element => {
  return (
    <label className={styles.label}>
      <input type={'radio'}/>
      {label}
    </label>
  );
};

export default Radio;