import { shallow } from 'enzyme';
import React from 'react';
import Select from './Select';

const props = {
    options: [
        {value: "text_1", label: "TEST 1"},
        {value: "text_2", label: "TEST 2"},
        {value: "text_3", label: "TEST 3"},
    ],
    value: 0,
    handleChange: () => {},
};

const setUp = (props) => shallow(<Select {...props} />);

describe('<Select />', () => {
    describe('Has props', () => {
        const component = setUp(props);
        it('should render select element', () => {
            const select = component.find('select');
            expect(select).toHaveLength(1);
        });
        it('should render three element option', () => {
            const option = component.find('option');
            expect(option).toHaveLength(3);
        });
        it('should render element span', () => {
            const span = component.find('span');
            expect(span).toHaveLength(1);
        });
    });
    describe('Has no props', () => {
        it('should render placeholder', () => {
            const component = shallow(<Select />);
            const placeholder = component.find('.placeholder');
            expect(placeholder).toHaveLength(1);
        });
    });
    describe('defaultProps', () => {
        it('should use default handleChange', () => {
            const result = Select.defaultProps.handleChange();
            expect(result).toBe(undefined);

        });
    });
});
