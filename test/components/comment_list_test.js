import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';


describe('CommentList', () => {
    const props = { comments: ['new comment', 'other nu comment'] };
    const component = renderComponent(CommentList, null, props);

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });
    it('shows each comment provided', () => {
        expect(component).to.contain('new comment');
        expect(component).to.contain('other nu comment');
    });
});

