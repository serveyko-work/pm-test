import React, { FC } from 'react';
import styles from './Footer.module.scss';
import IconSocialTwitter from '../UI/Icons/IconSocialTwitter';
import IconSocialLinkedIn from '../UI/Icons/IconSocialLinkedIn';
import IconSocialFacebook from '../UI/Icons/IconSocialFacebook';
import IconSocialInstagram from '../UI/Icons/IconSocialInstagram';
import IconSocialYouTube from '../UI/Icons/IconSocialYouTube';
import IconSocialWhatsApp from '../UI/Icons/IconSocialWhatsapp';
import cn from 'classnames';

const ICONS = [
  <IconSocialTwitter/>,
  <IconSocialLinkedIn/>,
  <IconSocialFacebook/>,
  <IconSocialInstagram/>,
  <IconSocialYouTube/>,
  <IconSocialWhatsApp/>,
]

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenuWrapper}>
        <div className={styles.footerMenu}>
          <div className={styles.footerMenuBlock}>
            <h3>Другое</h3>
            <p>Про Нас</p>
            <p>Блог</p>
          </div>
          <div className={styles.footerMenuBlock}>
            <h3>Сотрудничество с нами</h3>
            <p>Реклама на сайте</p>
            <p>Партнерская программа</p>
            <p>Контакты</p>
          </div>
          <div className={styles.iconsWrapper}>
            {
              ICONS?.map((icon: JSX.Element, index: number) =>
                <a key={`icon_${index}`} href={'#'}>
                  {icon}
                </a>
              )
            }
          </div>
        </div>
      </div>
      <div className={cn(styles.policy, styles.policyPc)}>
        <p>Privacy Policy</p>
        <p>©2021 All rights reserved</p>
        <p>Terms of Use</p>
      </div>
      <div className={cn(styles.policy, styles.policyPhone)}>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>©2021 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
