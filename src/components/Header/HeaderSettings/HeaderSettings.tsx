import React, { FC } from 'react';
import styles from './HeaderSettings.module.scss'
import IconPlanet from '../../UI/Icons/IconPlanet';
import Select from '../../UI/Select/Select';

const LANGUAGE_OPTIONS = ['RU', 'EN', 'UA'];

const OPTIONS = ['Соискателю', 'Работодателю', 'HR']

const HeaderSettings: FC = (): JSX.Element => {
  return (
    <div className={styles.main}>
        <div className={styles.leftBlock}>
          <div className={styles.selectOption}>
            <Select name={'Соискатель'} className={styles.customSelect} options={OPTIONS}/>
          </div>
            <div className={styles.leftBlockOptions}>
              <span className={styles.division}>
                Соискатель
              </span>
              <span className={styles.division}>
                Работодатель
              </span>
              <span>
                HR
              </span>
            </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.choseLanguage}>
            <IconPlanet className={styles.planet}/>
            <Select className={styles.languageSelect} name={'RU'} options={LANGUAGE_OPTIONS}/>
          </div>
          <span className={styles.signIn}>
            Войти
          </span>
        </div>
    </div>
  );
};

export default HeaderSettings;