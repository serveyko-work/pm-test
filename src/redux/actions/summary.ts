import { TYPES } from '../types';
import { results } from '../../types/results';

export const setData = (payload: results) => {
  return {
    type: TYPES.SET_DATA,
    payload: payload
  }
}