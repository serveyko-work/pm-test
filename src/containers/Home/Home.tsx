import React, { FC, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import SummaryHeader from '../../components/SummaryHeader/SummaryHeader';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Summaries from '../../components/Summaries/Summaries';
import { results } from '../../types/results';
import SummarySelectors from '../../redux/summary/summary-selectors';
import { setData } from '../../redux/summary/summary-operations';

const Home: FC = (): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {search} = useLocation();
  const data: results = useSelector(SummarySelectors.getData)

  useEffect(() => {
    const getSummary = async (): Promise<void> => {
      setLoader(true);
      await dispatch(setData(search));
    }

    getSummary().then(() => setLoader(false));
  }, [search, dispatch])

  return (
    <div>
      {
        loader ?
          <Loader className={styles.loader}/> :
          <>
            <SummaryHeader total={data?.total_count}/>
            <Summaries results={data?.results}/>
            {data?.total_count && <Pagination/>}
          </>
      }
    </div>
  );
};

export default Home;
