import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/noteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
