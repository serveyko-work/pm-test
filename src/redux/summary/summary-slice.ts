import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import summaryOperations from './summary-operations'
import { results } from '../../types/results';
import { RootState } from '../store';

const initialState = {
  page_count: 0,
  results: [],
  total_count: 0,
  current_page: 0
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {},
    extraReducers: {
      [summaryOperations.setData.fulfilled]: (state: RootState, action: PayloadAction<results>) => {
          return {
            ...state,
            ...action?.payload
          }
      },
      [summaryOperations.setData.rejected]: (state: RootState, action: PayloadAction<results>) => {
        state = initialState;
      },
    },
  },
)

const summaryReducer = summarySlice.reducer

export default summaryReducer