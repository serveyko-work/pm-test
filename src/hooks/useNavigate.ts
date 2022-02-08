import { getQueryParams } from '../helpers/helpers';
import { useLocation, useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
  const {search} = useLocation();
  const navigate = useNavigate();

  const changeParam = (param: string, value: string | number | boolean) => {
    const query = search !== '' ? getQueryParams(search) : '';
    delete query[param];
    let newQuery = '';
    const oldQuery = Object.entries(query);
    if (oldQuery?.length) {
      newQuery += '?';
      oldQuery.map((item) => {
        if (item[0] === 'page') {
          newQuery += `${item[0]}=1`;
        } else {
          newQuery += `${item[0]}=${item[1]}`
        }
      })
    }
    if (newQuery && newQuery !== '') {
      newQuery += `&${param}=${value}`
    } else {
      newQuery += `?${param}=${value}`
    }
    navigate(`/${newQuery}`)
  }

  return { changeParam }
}

export default useCustomNavigate;