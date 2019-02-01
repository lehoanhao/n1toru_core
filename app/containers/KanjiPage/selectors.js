import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the kanjiPage state domain
 */

const selectKanjiPageDomain = state => state.get('kanjiPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by KanjiPage
 */

const makeSelectKanjiPage = () =>
  createSelector(selectKanjiPageDomain, substate => substate.toJS());

export default makeSelectKanjiPage;
export { selectKanjiPageDomain };
