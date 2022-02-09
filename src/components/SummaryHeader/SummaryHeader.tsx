import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './SummaryHeader.module.scss';
import Select from '../UI/Select/Select';
import Settings from '../UI/Icons/Settings';
import Filter from '../Filter/Filter';
import IconClose from '../UI/Icons/IconClose';
import cn from 'classnames';

interface Props {
  total: number | string;
}

const OPTIONS = ['за всё время', 'за вчера', 'за сегодня'];

const SummaryHeader: FC<Props> = ({total}): JSX.Element => {
    const [isShow, setIsShow] = useState<boolean>(false);

    const changeShowFilter = () => {
      setIsShow((prevState: boolean) => {
        document.body.style.overflow = !prevState ? 'hidden' : 'auto';
        return !prevState;
      })
    }

    const closeSelect = (): void => {
      setIsShow(false);
      document.body.style.overflow = 'auto';
    }

    useEffect(() => {
      window.addEventListener('scroll', closeSelect);
      window.addEventListener('resize', closeSelect, true);
      return () => {
        window.removeEventListener('scroll', closeSelect);
        window.removeEventListener('resize', closeSelect, true);
      }
    }, [])

    return (
      <div className={styles.summaryHeader}>
        <h1 className={styles.title}>Мы подобрали <span className={styles.total}>{total}</span> резюме</h1>
        <div className={styles.line}/>
        <div className={styles.subfilter}>
          <p className={styles.subtitle}>Резюме продавец консультант во Всей Украине</p>
          <div className={styles.subfilterWrapper}>
            <Select className={styles.customSelect} options={OPTIONS} name={'за всё время'}/>
            <div className={styles.settingsWrapper}>
              <div onClick={changeShowFilter}><Settings/></div>
              <div className={cn(styles.filter, {[styles.showFilter]: isShow})}>
                <Filter/>
                <div className={styles.closeIcon} onClick={changeShowFilter}>
                  <IconClose/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
;

export default SummaryHeader;
