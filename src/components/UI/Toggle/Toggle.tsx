import React, { FC, useEffect, useState } from 'react';
import styles from './Toggle.module.scss';
import useCustomNavigate from '../../../hooks/useNavigate';
import { useLocation } from 'react-router-dom';
import { getQueryParams } from '../../../helpers/helpers';

interface Props {
  name?: string
}

const Toggle: FC<Props> = ({name}): JSX.Element => {
  const { search } = useLocation();
  const { changeParam } = useCustomNavigate();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const onToggle = (): void => {
    setIsToggled(prevState => {
      if (name) {
        changeParam(name, !prevState)
      }
      return !prevState
    });
  }

  useEffect(() => {
    const params = getQueryParams(search);
    if (name && params.hasOwnProperty(name)) {
      setIsToggled(params[name] === 'true')
    }
  }, [name, search])

  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={styles.switch} />
    </label>
  );
};

export default Toggle;