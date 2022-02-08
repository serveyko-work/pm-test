import React, { FC, useState } from 'react';
import styles from './Summary.module.scss';
import IconMark from '../../UI/Icons/IconMark';
import cn from 'classnames';
import Heart from '../../UI/Icons/Heart';
import IconThreeDots from '../../UI/Icons/IconThreeDots';
import { user, workCity, workexperience } from '../../../types/results';

interface Props {
  summary: user;
}

const Summary: FC<Props> = ({summary}): JSX.Element => {

  const [showSettings, setShowSettings] = useState(false);

  const getName = (): string => {
    const name = `${summary?.first_name} ${summary?.last_name}`;
    if (name.trim() === '') {
      return 'Дмитрий, 23 года';
    } else {
      return name;
    }
  }

  const getCity = (): string => {
    const city = summary?.work_city?.map((item: workCity) => item?.display_name).join(', ');
    if (city.trim() === '') {
      return 'Kyiv, Ukraine';
    } else {
      return city;
    }
  }

  const getMonth = (from: string, to: string): string => {
    const d2 = new Date(to);
    const d1 = new Date(from);
    let months = 0;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    const years = Math.floor(months / 12);
    const m = months % 12;
    const result = `${years > 0 ? `${years} год` : ''} ${m > 0 ? `${m} мес.` : ''}`
    return result;
  }

  const changeShow = (): void => {
    setShowSettings((prevState) => !prevState)
  }

  return (
    <div className={styles.summary}>
      <div className={styles.summaryWrapper}>
      <div className={styles.userBlock}>
        <div className={styles.avatar}>
          {summary?.photo && <img src={summary?.photo} alt={`${summary?.first_name} ${summary?.last_name}`}/>}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.userInfo}>
            <h2 className={styles.category}>{summary?.category}</h2>
          </div>
          <div className={styles.nameAndLocation}>
            <p>{getName()}</p>
            <div className={styles.markBlock}><IconMark/><p>{getCity()}</p></div>
          </div>
          <div className={styles.description}>
            {
              summary?.workexperience?.map((item: workexperience) =>
                  <p className={styles.desiredposition} key={`position_${item?.id}`}>
                    {item?.position} {item?.company_name} {getMonth(item?.date_from, item?.date_to)}
                  </p>
              )
            }
          </div>
          <div className={styles.onlineInfo}>
            <p className={styles.time}>Обновлено 9 минут назад</p>
            <div className={cn(styles.circleWrapper, {[styles.isOnline]: summary?.status})}>
              <div className={styles.circle}/>
              <p>{!summary?.status ? 'Онлайн' : 'Не онлайн'}</p>
            </div>
          </div>
        </div>

        <div className={styles.settings}>
          <div className={styles.settingsButton}>
            <Heart/>
          </div>
          <div className={cn(styles.settingsButton, styles.dots)} onClick={changeShow}>
            <IconThreeDots/>
            <div className={cn(styles.modalMenu, {[styles.showModal]: showSettings})}>
              <p>Пожаловаться</p>
              <p>Скрыть кандидата</p>
            </div>
          </div>
        </div>
      </div>
        <div className={styles.mobileStyle}>
        <div className={cn(styles.description, styles.descriptionMobile)}>
          {
            summary?.workexperience?.map((item: workexperience) =>
              <p className={styles.desiredposition} key={`position_${item?.id}`}>
                {item?.position} {item?.company_name} {getMonth(item?.date_from, item?.date_to)} мес.
              </p>
            )
          }
        </div>
          <div className={cn(styles.onlineInfo, styles.onlineMobile)}>
            <p>Обновлено 9 минут назад</p>
            <div className={cn(styles.circleWrapper, {[styles.isOnline]: summary?.status})}>
              <div className={styles.circle}/>
              <p>{!summary?.status ? 'Онлайн' : 'Не онлайн'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;