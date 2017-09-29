import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknow type', () => {
        expect(commentsReducer(undefined, {})).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'hola!' };
        expect(commentsReducer([], action)).to.eql(['hola!'])
    });
});
