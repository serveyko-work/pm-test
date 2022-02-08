import React, { FC } from 'react';
import Range from '../UI/Range/Range';
import styles from './Filter.module.scss';
import Mortarboard from '../UI/Icons/Mortarboard';
import cn from 'classnames';
import Toggle from '../UI/Toggle/Toggle';
import LoudSpeaker from '../UI/Icons/LoudSpeaker';
import FilterBlock from './FilterBlock/FilterBlock';
import PurpleButton from '../UI/Buttons/PurpleButton/PurpleButton';
import Checkbox from '../UI/Checkbox/Checkbox';
import IconLanguageUK from '../UI/Icons/IconLanguageUK';
import IconLanguageRussia from '../UI/Icons/IconLanguageRussia';
import IconLanguageUkraine from '../UI/Icons/IconLanguageUkraine';
import IconLanguageGermany from '../UI/Icons/IconLanguageGermany';
import IconLanguagePolland from '../UI/Icons/IconLanguagePolland';
import IconLanguageSpain from '../UI/Icons/IconLanguageSpain';
import Accordeon from '../UI/Accordeon/Accordeon';

const EXPERIENCE = [
  {
    label: 'Без опыта',
    count: '603'
  },
  {
    label: 'До 1 года',
    count: '603'
  },
  {
    label: 'От 1 до 2 лет',
    count: '603'
  },
  {
    label: 'От 2 до 5 лет',
    count: '603'
  },
  {
    label: 'От 5 до 10 лет',
    count: '603'
  },
  {
    label: 'Более 10 лет',
    count: '603'
  },
]

const LANGUAGES = [
  {
    label: <><IconLanguageUK/>Английский</>,
    count: '603',
    options: [
      '(А1) – начальный',
      '(А2) – ниже среднего',
      '(В1) – средний',
      '(В2) – выше среднего',
      '(C1) – продвинутый',
      '(C2) – профессиональный уровень владения'
      ],
    optionsName: 'English'
  },
  {
    label: <><IconLanguageRussia/>Русский</>,
    count: '603',
    options: [
      '(А1) – начальный',
      '(А2) – ниже среднего',
      '(В1) – средний',
      '(В2) – выше среднего',
      '(C1) – продвинутый',
      '(C2) – профессиональный уровень владения'
    ],
    optionsName: 'Russian'
  },
  {
    label: <><IconLanguageUkraine/>Украинский</>,
    count: '603',
    options: [
      '(А1) – начальный',
      '(А2) – ниже среднего',
      '(В1) – средний',
      '(В2) – выше среднего',
      '(C1) – продвинутый',
      '(C2) – профессиональный уровень владения'
    ],
    optionsName: 'Ukraine'
  },
  {
    label: <><IconLanguageGermany/>Немецкий</>,
    count: '603',
    options: [
      '(А1) – начальный',
      '(А2) – ниже среднего',
      '(В1) – средний',
      '(В2) – выше среднего',
      '(C1) – продвинутый',
      '(C2) – профессиональный уровень владения'
    ],
    optionsName: 'Germany'
  },
  {
    label: <><IconLanguagePolland/>Польский</>,
    count: '603',
    options: [
      '(А1) – начальный',
      '(А2) – ниже среднего',
      '(В1) – средний',
      '(В2) – выше среднего',
      '(C1) – продвинутый',
      '(C2) – профессиональный уровень владения'
    ],
    optionsName: 'Polland'
  },
  {
    label: <><IconLanguageSpain/>Испанский</>,
    count: '603',
    options: [
      '(А1) – начальный',
      '(А2) – ниже среднего',
      '(В1) – средний',
      '(В2) – выше среднего',
      '(C1) – продвинутый',
      '(C2) – профессиональный уровень владения'
    ],
    optionsName: 'Spain'
  },
]

const TYPE = [
  {
    label: 'Полная занятость',
    count: '34567'
  },
  {
    label: 'Неполная занятость',
    count: '876'
  },
  {
    label: 'Удаленная работа',
    count: '1234'
  },
]

const EDUCATION = [
  {
    label: 'Высшее',
    count: '34567'
  },
  {
    label: 'Неоконченное высшее',
    count: '876'
  },
  {
    label: 'Средне-специальное',
    count: '1234'
  },
  {
    label: 'Среднее',
    count: '8764'
  },
]

const Filter: FC = (): JSX.Element => {
  return (
    <div className={styles.filterWrapper}>
      <h2 className={styles.title}>Фильтры</h2>

      <div className={cn(styles.filterBLock, styles.filterWithPhoto)}>
        <div className={styles.withPhotoWrapper}>
          <LoudSpeaker className={styles.loudSpeaker}/>
          <p className={styles.withPhoto}>Только с фотографией</p>
        </div>
        <Toggle name={'photo'}/>
      </div>


      <FilterBlock title={'Возраст'}>
        <Range
          min={16}
          max={80}
          filterBy={'лет'}
          onChange={({min, max}: { min: number; max: number }) => {}}
        />
      </FilterBlock>


      <FilterBlock title={'Пол'}>
        <div className={styles.sexWrapper}>
          <PurpleButton text={'Любой'} className={styles.activeButton}/>
          <PurpleButton text={'Женщины'}/>
          <PurpleButton text={'Мужчины'}/>
        </div>
      </FilterBlock>

      <FilterBlock title={'Желаемая зарплата'}>
        <Range
          min={0}
          max={80000}
          filterBy={'грн'}
          onChange={({min, max}: { min: number; max: number }) => {}}
        />
        <div className={styles.withoutSale}>
          <p>Не показывать без зарплаты</p>
          <Toggle/>
        </div>
      </FilterBlock>

      <FilterBlock customTitleStyle={styles.customExperience} title={'Опыт работы'}>
        <div className={styles.checkboxes}>
          {
            EXPERIENCE.map((item) =>
              <div key={item?.label} className={styles.checkBoxWrapper}>
                <Checkbox label={item?.label}/>
                <span>{item?.count}</span>
              </div>
            )
          }
        </div>
        <div className={styles.withoutSale}>
          <div className={styles.mortarboardWrapper}>
            <Mortarboard className={styles.mortarboard}/>
            <p>Только студенты</p>
          </div>
          <Toggle/>
        </div>
      </FilterBlock>

      <FilterBlock title={'Владение языками'}>
        <div className={styles.checkboxes}>
          {
            LANGUAGES.map((item) =>
              <Accordeon key={item?.optionsName} title={
                <div className={styles.checkBoxWrapper}>
                  <Checkbox label={item?.label}/>
                </div>
              } optionsName={item?.optionsName} options={item.options} count={item?.count}/>
            )
          }
        </div>
      </FilterBlock>

      <FilterBlock title={'Тип занятости'}>
        <div className={styles.checkboxes}>
          {
            TYPE.map((item) =>
              <div key={item?.label} className={styles.checkBoxWrapper}>
                <Checkbox label={item?.label}/>
                <span>{item?.count}</span>
              </div>
            )
          }
        </div>
      </FilterBlock>

      <FilterBlock title={'Образование'}>
        <div className={styles.checkboxes}>
          {
            EDUCATION.map((item) =>
              <div key={item?.label} className={styles.checkBoxWrapper}>
                <Checkbox label={item?.label}/>
                <span>{item?.count}</span>
              </div>
            )
          }
        </div>
      </FilterBlock>

    </div>
  );
};

export default Filter;
