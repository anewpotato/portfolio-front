import { createSlice } from '@reduxjs/toolkit';

import { NavigationType } from '@src/types/header';

export type NavigationSliceType = {
  selectedIndex: number;
  list: NavigationType;
};

// Define the initial state using that type
const initialState: NavigationSliceType = {
  selectedIndex: 0,
  list: [
    { id: 'Profile', to: '#profile' },
    { id: 'Skills', to: '#skills' },
    { id: 'Career', to: '#career' },
    { id: 'Projects', to: '#projects' },
    { id: 'Etc', to: '#etc' },
    { id: 'Contact', to: '#contact' },
  ],
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSelectedNavigationIndex: (state, action) => {
      const newState = state;
      newState.selectedIndex = action.payload;
      return newState;
    },
  },
});

export const { setSelectedNavigationIndex } = navigationSlice.actions;

export default navigationSlice.reducer;
