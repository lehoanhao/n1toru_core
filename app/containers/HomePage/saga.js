/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { kanjisLoaded, kanjisLoadingError } from 'containers/HomePage/actions';

import request from 'utils/request';
import { LOAD_KANJIS } from './constants';

export function* getKanjis() {
  const requestURL = `http://mazii.net/api/jlptkanji/1qwq/100/0`;
  try {
    // Call our request helper (see 'utils/request')
    const kanjis = yield call(request, requestURL);
    yield put(kanjisLoaded(kanjis));
  } catch (err) {
    yield put(kanjisLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_KANJIS, getKanjis);
}
