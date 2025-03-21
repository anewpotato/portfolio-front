import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    setDarkMode: (state, action) => action.payload,
  },
});

export const { setDarkMode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
