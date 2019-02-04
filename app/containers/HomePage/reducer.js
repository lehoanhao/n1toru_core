/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_KANJIS,
  LOAD_KANJIS_SUCCESS,
  LOAD_KANJIS_ERROR,
  LOAD_KANJI_DETAIL,
  LOAD_KANJI_DETAIL_SUCCESS,
  LOAD_KANJI_DETAIL_ERROR,
  LOAD_KANJI_DRAW,
  LOAD_KANJI_DRAW_SUCCESS,
  LOAD_KANJI_DRAW_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  kanjis: [],
  kanjiDetail: {},
  kanjiDraw: null,
  loadingDetail: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_KANJIS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('kanjis', undefined);
    case LOAD_KANJIS_SUCCESS:
      return state.set('kanjis', action.data.results).set('loading', false);
    case LOAD_KANJIS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_KANJI_DETAIL:
      return state.set('kanjiDetail', undefined).set('loadingDetail', true);
    case LOAD_KANJI_DETAIL_SUCCESS:
      return state
        .set('kanjiDetail', action.data.results[0])
        .set('loadingDetail', false);
    case LOAD_KANJI_DETAIL_ERROR:
      return state.set('error', action.error).set('loadingDetail', false);
    case LOAD_KANJI_DRAW:
      return state.set('kanjiDraw', undefined);
    case LOAD_KANJI_DRAW_SUCCESS:
      console.log(action.data.text());
      return state.set('kanjiDraw', action.data);
    case LOAD_KANJI_DRAW_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
