import React, { FC, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import SummaryHeader from '../../components/SummaryHeader/SummaryHeader';
import { http } from '../../http/http';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../redux/actions/summary';
import Summaries from '../../components/Summaries/Summaries';
import { RootState } from '../../redux/store';
import { results, user } from '../../types/results';
import { getSummaries } from '../../services/summariesApi';

const Home: FC = (): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {search} = useLocation();
  const data: results = useSelector((state: RootState) => state?.summaryReducer);

  useEffect(() => {
    setLoader(true);
    getSummaries(search)
      .then( (res: results) => {
        dispatch(setData(res));
        setLoader(false);
      })
      .catch((error) => {
        console.log(error?.message)
      });
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
