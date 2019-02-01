/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_KANJIS,
  LOAD_KANJIS_ERROR,
  LOAD_KANJIS_SUCCESS,
} from './constants';

export function loadKanjis() {
  return {
    type: LOAD_KANJIS,
  };
}
export function kanjisLoaded(kanjis) {
  return {
    type: LOAD_KANJIS_SUCCESS,
    data: kanjis,
  };
}
export function kanjisLoadingError(error) {
  return {
    type: LOAD_KANJIS_ERROR,
    error,
  };
}
