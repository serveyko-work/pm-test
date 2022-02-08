import React, { FC } from 'react';
import styles from './PurpleButton.module.scss';
import cn from 'classnames';

interface Props {
  text: string;
  className?: string
}

const PurpleButton: FC<Props> = ({text, className}): JSX.Element => {
  return (
    <button className={cn(styles.button, className)}>
      {text}
    </button>
  );
};

export default PurpleButton;