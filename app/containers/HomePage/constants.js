/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_KANJIS = 'n1toru/Home/LOAD_KANJIS';
export const LOAD_KANJIS_SUCCESS = 'n1toru/Home/LOAD_KANJIS_SUCCESS';
export const LOAD_KANJIS_ERROR = 'n1toru/Home/LOAD_KANJIS_ERROR';

export const LOAD_KANJI_DETAIL = 'n1toru/Home/LOAD_KANJI_DETAIL';
export const LOAD_KANJI_DETAIL_SUCCESS =
  'n1toru/Home/LOAD_KANJI_DETAIL_SUCCESS';
export const LOAD_KANJI_DETAIL_ERROR = 'n1toru/Home/LOAD_KANJI_DETAIL_ERROR';

export const LOAD_KANJI_DRAW = 'n1toru/Home/LOAD_KANJI_DRAW';
export const LOAD_KANJI_DRAW_SUCCESS = 'n1toru/Home/LOAD_KANJI_DRAW_SUCCESS';
export const LOAD_KANJI_DRAW_ERROR = 'n1toru/Home/LOAD_KANJI_DRAW_ERROR';
