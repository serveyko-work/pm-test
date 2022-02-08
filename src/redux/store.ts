import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './summary/summary-slice';

export const store: any = configureStore({
  reducer: {
    summary: summaryReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>