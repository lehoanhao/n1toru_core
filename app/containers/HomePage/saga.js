/**
 * Gets the repositories of the user from Github
 */

import { call, put, all } from 'redux-saga/effects';
import {
  kanjisLoaded,
  kanjisLoadingError,
  kanjiDetailLoaded,
  kanjiDetailLoadingError,
} from 'containers/HomePage/actions';

import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { LOAD_KANJIS, LOAD_KANJI_DETAIL } from './constants';

function* getKanjis(action) {
  const requestURL = `https://mazii.net/api/jlptkanji/1/100/${action.page}`;
  try {
    // Call our request helper (see 'utils/request')
    const kanjis = yield call(request, requestURL);
    yield put(kanjisLoaded(kanjis));
  } catch (err) {
    yield put(kanjisLoadingError(err));
  }
}

export function* watchKanjisData() {
  yield takeLatest(LOAD_KANJIS, getKanjis);
}

function* getKanjiDetail(action) {
  const requestURL = `https://mazii.net/api/mazii/${action.kanji}/10`;
  try {
    // Call our request helper (see 'utils/request')
    const kanjiDetail = yield call(request, requestURL);
    yield put(kanjiDetailLoaded(kanjiDetail));
  } catch (err) {
    yield put(kanjiDetailLoadingError(err));
  }
}

export function* watchKanjiDetailData() {
  yield takeLatest(LOAD_KANJI_DETAIL, getKanjiDetail);
}

export default function* watchAll() {
  yield all([watchKanjisData(), watchKanjiDetailData()]);
}
