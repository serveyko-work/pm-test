import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import usePagination, { DOTS } from '../../hooks/usePagination';
import useCustomNavigate from '../../hooks/useNavigate';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Props {
  siblingCount?: number
}

const Pagination:FC<Props> = ({siblingCount = 1}) => {
  const {current_page: currentPage, page_count: pageSize, total_count: totalCount} = useSelector((state: RootState) => state?.summaryReducer);
  const { changeParam } = useCustomNavigate();
  const paginationRange: (string | number)[] | undefined = usePagination({currentPage, totalCount, siblingCount, pageSize});

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }

  const onNext = () => {
    changeParam('page', currentPage + 1);
  };

  const onPrevious = () => {
    changeParam('page', currentPage - 1);
  };

  let lastPage = paginationRange ? paginationRange[paginationRange?.length - 1] : 1;
  return (
    <ul
      className={styles.paginationContainer}
    >
      <li
        className={cn(styles.paginationItem, {
          [styles.disabled]: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={cn(styles.arrow, styles.left)} />
      </li>
      {paginationRange?.map((pageNumber: number | string) => {
        if (pageNumber === DOTS) {
          return <li key={`page_${pageNumber}`} className={cn(styles.paginationItem, styles.dots)}>&#8230;</li>;
        }

        return (
          <li
            key={`page_${pageNumber}`}
            className={cn(styles.paginationItem, {
              [styles.selected]: pageNumber === currentPage
            })}
            onClick={() => changeParam('page', pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={cn(styles.paginationItem, {
          [styles.disabled]: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={cn(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};

export default React.memo(Pagination);