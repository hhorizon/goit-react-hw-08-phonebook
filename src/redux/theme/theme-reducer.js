import { createReducer } from '@reduxjs/toolkit';
import * as themeActions from './theme-actions';
const initialState = {
  mainTheme: 'fiolet',
  mainGradient: 'linear-gradient(to right, #131111, #43225e)',
  mainColor: '#43225e',
};

const themeReducer = createReducer(initialState, {
  [themeActions.changeTheme]: (state, { payload }) => payload,
});

export default themeReducer;
