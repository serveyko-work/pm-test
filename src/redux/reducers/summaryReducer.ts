import { TYPES } from '../types';
import { results } from '../../types/results';

const initialState = {
  page_count: 0,
  results: [],
  total_count: 0,
  current_page: 0
};

interface IAction {
  type: string,
  payload: results
}

const summaryReducer = ( state = initialState, action: IAction ) => {
  switch( action.type ) {
    case TYPES.SET_DATA: {
      return action.payload;
    }
    default: return state;
  }
}
export default summaryReducer;