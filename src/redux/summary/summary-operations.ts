import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSummaries } from '../../services/summariesApi';
import { results } from '../../types/results';

export const setData = createAsyncThunk(
  'summary/logout',
  async (search: string, {rejectWithValue}: any) => {
    try {
      const data: results = await getSummaries(search)
      return data
    } catch (error: any) {
      return rejectWithValue(error?.message)
    }
  },
)

const summaryOperations: any = {
  setData
}

export default summaryOperations;