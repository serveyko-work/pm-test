import React, { FC, useState } from 'react';
// @ts-ignore
import stylesOriginal from './Checkbox.module.scss';
import CheckBox from '../Icons/CheckBox';
import cn from 'classnames';

interface Props {
  label?: string | JSX.Element;
}


const Checkbox: FC<Props> = ({label}: Props) => {

  const [isActive, setIsActive] = useState(false);
  return (
    <label className={stylesOriginal.labelCheck}>
      <input type="checkbox"
             onChange={(e) => {
               setIsActive(e.target.checked)
             }}
             style={{width: "1px", height: "1px"}}/>
      <div className={cn(stylesOriginal.inputBox, {[stylesOriginal.active]: isActive})}>
        <span className={stylesOriginal.checkWrap}>
          <CheckBox className={stylesOriginal.check}/>
        </span>
      </div>
      <span className={stylesOriginal.labelText}>{label}</span>
    </label>
  )
};

export default Checkbox;
