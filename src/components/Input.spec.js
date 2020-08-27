import { shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

describe('<Input />', () => {
    it('should correctly render component Input', () => {
        const component = shallow(<Input />);
        expect(component).toMatchSnapshot();
    });

    describe("defaultProps", () => {
        it('should use default onChange', () => {
            const result = Input.defaultProps.onChange();
            expect(result).toBeUndefined();
        });
        it('should use default onKeyPress', () => {
            const result = Input.defaultProps.onKeyPress();
            expect(result).toBeUndefined();
        });
    });

    it("should call onChange method", () => {
        const mockCallBack = jest.fn();
        const component = shallow(<Input onChange={mockCallBack} />);
        expect(mockCallBack.mock.calls.length).toEqual(0);
        component.find(".input").simulate("change");
        console.log(component.find(".input").length);
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
