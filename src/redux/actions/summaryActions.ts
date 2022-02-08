import { TYPES } from '../types';
import { results } from '../../types/results';
import { getSummaries } from '../../services/summariesApi';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const setReducerData = (payload: results) => {
  return {
    type: TYPES.SET_DATA,
    payload: payload
  }
}

export function setData(search: string): ThunkAction<any, any, any, any> {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const data: results = await getSummaries(search);
      dispatch(setReducerData(data));
    } catch (e) {
      console.log('error')
    }
  };
}