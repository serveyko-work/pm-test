import React, { FC } from 'react';

interface Props {
  className?: string
}

const IconPlanet: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9993 22C4.93308 22 0 17.0664 0 11C0 4.93358 4.93308 0 10.9993 0C17.0654 0 22 4.93358 22 11C22 17.0664 17.0654 22 10.9993 22ZM11.0228 1.26593C8.46542 1.26906 6.01373 2.29406 4.20542 4.1161C2.39712 5.93814 1.37985 8.40846 1.37674 10.9852C1.37946 13.5622 2.39656 16.0329 4.20491 17.8553C6.01325 19.6776 8.46517 20.7028 11.0228 20.706C13.5806 20.7032 16.0329 19.6782 17.8415 17.8558C19.6502 16.0334 20.6675 13.5625 20.6702 10.9852C20.6671 8.4082 19.6496 5.93766 17.841 4.11558C16.0324 2.2935 13.5803 1.26867 11.0228 1.26593Z" fill="#EAEAEA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 0.5H11V21.5H10V0.5Z" fill="#EAEAEA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 10H21V11H1V10Z" fill="#EAEAEA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 6H20V7H2V6Z" fill="#EAEAEA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 15H20V16H2V15Z" fill="#EAEAEA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3466 22C6.49024 20.1082 4 15.7703 4 10.948C4 6.2371 6.41005 1.93934 10.1447 0L10.8292 1.31816C7.58167 3.00784 5.48494 6.78695 5.48494 10.948C5.48494 15.2056 7.65146 19.0204 11 20.664L10.3466 22Z" fill="#EAEAEA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.7262 22L11 20.679C14.3119 18.9826 16.4517 15.1723 16.4517 10.9716C16.4517 6.82021 14.3475 3.02788 11.0944 1.31198L11.8361 0C15.58 1.97171 18 6.27866 18 10.9716C18.0015 15.7213 15.5366 20.0492 11.7262 22Z" fill="#EAEAEA"/>
    </svg>

  );
};

export default IconPlanet;
