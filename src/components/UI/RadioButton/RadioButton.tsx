import React, { FC } from 'react';
import styles from './RadioButton.module.scss';

interface Props {
  name: string;
  label: string;
}

const RadioButton: FC<Props> = ({name, label}: Props) => {
  return (
    <label className={styles.label} htmlFor={`${name}_${label}`}>
      <input name={name} id={`${name}_${label}`} type={'radio'}/>
      <div className={styles.circle}>
        <div className={styles.insideCircle}/>
      </div>
      <span className={styles.text}>{label}</span>
    </label>
  )

};

export default RadioButton;
