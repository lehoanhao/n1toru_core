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
const makeSelectLoadingDetail = () =>
  createSelector(selectHome, homeState => homeState.get('loadingDetail'));
const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));
const makeSelectKanjiDetail = () =>
  createSelector(selectHome, homeState => homeState.get('kanjiDetail'));
const makeSelectKanjiDraw = () =>
  createSelector(selectHome, homeState => homeState.get('kanjiDraw'));
export {
  selectHome,
  makeSelectKanjis,
  makeSelectLoading,
  makeSelectError,
  makeSelectKanjiDetail,
  makeSelectLoadingDetail,
  makeSelectKanjiDraw,
};
