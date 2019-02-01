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
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  kanjis: [],
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
    default:
      return state;
  }
}

export default homeReducer;
