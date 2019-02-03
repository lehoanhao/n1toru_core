/**
 * Gets the repositories of the user from Github
 */

import { call, put } from 'redux-saga/effects';
import {
  kanjisLoaded,
  kanjisLoadingError,
  kanjiDetailLoaded,
  kanjiDetailLoadingError,
} from 'containers/HomePage/actions';

import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { LOAD_KANJIS, LOAD_KANJI_DETAIL } from './constants';

export function* getKanjis(action) {
  const requestURL = `https://mazii.net/api/jlptkanji/1/100/${action.page}`;
  try {
    // Call our request helper (see 'utils/request')
    const kanjis = yield call(request, requestURL);
    yield put(kanjisLoaded(kanjis));
  } catch (err) {
    yield put(kanjisLoadingError(err));
  }
}

export function* getKanjiDetail(action) {
  const requestURL = `https://mazii.net/api/mazii/${action.kanji}/10`;
  try {
    // Call our request helper (see 'utils/request')
    const kanjiDetail = yield call(request, requestURL);
    yield put(kanjiDetailLoaded(kanjiDetail));
  } catch (err) {
    yield put(kanjiDetailLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAll() {
  yield takeLatest(LOAD_KANJIS, getKanjis);
  yield takeLatest(LOAD_KANJI_DETAIL, getKanjiDetail);
}
