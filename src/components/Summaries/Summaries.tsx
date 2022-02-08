import React, { FC } from 'react';
import Summary from './Summary/Summary';
import styles from './Summaries.module.scss';
import { user } from '../../types/results';

interface Props {
  results: Array<user>;
}

const Summaries: FC<Props> = ({results}): JSX.Element => {
  return (
    <div className={styles.summaries}>
      {
        results.map((item: user) =>
          <Summary key={item?.id} summary={item}/>
        )
      }
    </div>
  );
};

export default Summaries;
