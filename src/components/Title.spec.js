import { shallow } from 'enzyme';
import React from 'react';
import Title from './Title';


describe('<Title />', () => {

    it('should correctly render component Title without props', () => {
        const component = shallow(<Title />);
        expect(component).toMatchSnapshot();
    });
    it('should correctly render component Title with props', () => {
        const component = shallow(<Title title="Test title" />);
        expect(component).toMatchSnapshot();
    });
});
