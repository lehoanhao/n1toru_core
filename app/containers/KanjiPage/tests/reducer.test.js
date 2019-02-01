import { fromJS } from 'immutable';
import kanjiPageReducer from '../reducer';

describe('kanjiPageReducer', () => {
  it('returns the initial state', () => {
    expect(kanjiPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
