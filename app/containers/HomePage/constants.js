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

export const CHANGE_USERNAME = 'n1toru/Home/CHANGE_USERNAME';
export const LOAD_KANJIS = 'n1toru/Home/LOAD_KANJIS';
export const LOAD_KANJIS_SUCCESS = 'n1toru/App/LOAD_KANJIS_SUCCESS';
export const LOAD_KANJIS_ERROR = 'n1toru/App/LOAD_KANJIS_ERROR';
