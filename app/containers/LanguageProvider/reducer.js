/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = fromJS({
  locale: localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      localStorage.setItem('lang', action.locale);
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
