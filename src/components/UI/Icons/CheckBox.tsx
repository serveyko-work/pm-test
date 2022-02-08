import React, { FC } from 'react';

interface Props {
  className?: string;
}

const CheckBox: FC<Props> = ({ className }: Props) => (
  <svg className={className}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13.8 10.4" >
    <path  d="M4.9,10.4c-0.3,0-0.5-0.1-0.7-0.3L0.7,6.4C0.3,6,0.3,5.4,0.7,5c0.4-0.4,1-0.4,1.4,0l2.7,2.9l6.9-7.2
	c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-7.6,8C5.4,10.3,5.1,10.4,4.9,10.4z"/>
</svg>
);

export default CheckBox;
