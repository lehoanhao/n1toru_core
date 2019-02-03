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
  LOAD_KANJI_DETAIL,
  LOAD_KANJI_DETAIL_ERROR,
  LOAD_KANJI_DETAIL_SUCCESS,
} from './constants';

export function loadKanjis(page) {
  return {
    type: LOAD_KANJIS,
    page,
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

export function loadKanjiDetail(kanji) {
  return {
    type: LOAD_KANJI_DETAIL,
    kanji,
  };
}
export function kanjiDetailLoaded(kanjiDetail) {
  return {
    type: LOAD_KANJI_DETAIL_SUCCESS,
    data: kanjiDetail,
  };
}
export function kanjiDetailLoadingError(error) {
  return {
    type: LOAD_KANJI_DETAIL_ERROR,
    error,
  };
}
