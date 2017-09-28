import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions';
import { saveComment } from '../../src/actions';

describe('actions', () => {
    describe('saveComment', () =>{
        
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        it('has the correct payload', () => {
            const action = saveComment('ou yeah!');
            expect(action.payload).to.equal('ou yeah!');
        });
    });
});