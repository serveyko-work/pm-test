import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from "react";
import cn from "classnames";
import styles from './Range.module.scss';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
  filterBy: string;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
                                                       min,
                                                       max,
                                                       onChange,
                                                       filterBy
                                                     }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);


  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);


  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const changeMinVal = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(e?.target?.value);
    setMinVal(val < min ? min : val)
  }

  const changeMaxVal = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(e?.target?.value);
    setMaxVal(val > max ? max : val)
  }

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={cn(styles.thumb, styles.firstThumb, styles.thumbZindex3, {
          [styles.thumbZindex5]: minVal > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={cn(styles.thumb, styles.secondThumb, styles.thumbZindex4)}
      />

      <div className={styles.slider}>
        <div className={styles.sliderTrack}/>
        <div ref={range} className={styles.sliderRange}/>
        <div className={styles.values}>
        от <input value={minVal} min={min} type={'number'} onChange={(e) => setMinVal(parseInt(e.target.value))} onBlur={changeMinVal}/>
        до <input value={maxVal} max={maxVal} type={'number'} onChange={(e) => setMaxVal(parseInt(e.target.value))} onBlur={changeMaxVal}/> {filterBy}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
