import { configureStore } from '@reduxjs/toolkit';
import { navigationSlice } from './navigation/navigationSlice';
import { darkmodeSlice } from './darkmode/darkmodeSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    darkmode: darkmodeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
