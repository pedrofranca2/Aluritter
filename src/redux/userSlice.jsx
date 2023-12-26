import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: {
    login: '',
    password: '',
  },
  initialState: {
    userData: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, userData: payload };
    },
  },
});

export const { changeUser } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
