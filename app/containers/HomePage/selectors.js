/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectKanjis = () =>
  createSelector(selectHome, homeState => homeState.get('kanjis'));
const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));
const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));
export { selectHome, makeSelectKanjis, makeSelectLoading, makeSelectError };
