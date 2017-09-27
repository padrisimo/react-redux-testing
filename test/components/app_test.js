import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  const component = renderComponent(App);
  
  it('show a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
