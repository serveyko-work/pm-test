import React, { FC, useRef, useState } from 'react';
import Arrow from '../Icons/Arrow';
import styles from './Accordeon.module.scss';
import cn from 'classnames';
import RadioButton from '../RadioButton/RadioButton';

interface Props {
  title: string | JSX.Element;
  options: Array<string>;
  count: string;
  optionsName: string;
}

const Accordeon: FC<Props> = ({title, options, count, optionsName}): JSX.Element => {
  const [height, setHeight] = useState<number>();
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleClick = (): void => {
    const scrollHeight = wrapRef?.current?.scrollHeight;
    if (height === scrollHeight) {
      setHeight(0)
    } else {
      setHeight(scrollHeight)
    }
  }
  return (
    <div>
      <div onClick={handleClick} className={styles.title}>{title}<span>{count}<Arrow className={cn(styles.arrow, {[styles.active]: height})}/></span></div>
      <div ref={wrapRef} style={{height: `${height}px`}} className={cn(styles.options, {[styles.active]: height})}>
        {
          options?.map((item, index) =>
            <div className={styles.option} key={`${item}_${index}`}>
              <RadioButton name={optionsName} label={item}/>
              <span>73</span>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Accordeon;