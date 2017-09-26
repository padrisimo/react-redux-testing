import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//decribe - groups similar test 
describe('App', () => {

  // it - test a single attribute of a target
  it('shows the correct text', () => {

    //create an instance of App
    const component = renderComponent(App);

    //expect - assert about a target 
    expect(component).to.contain('React simple starter');

  });
});
