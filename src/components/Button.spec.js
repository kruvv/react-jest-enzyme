import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe("<Button />", () => {
    it("should call onClick method", () => {
        const mockCallBack = jest.fn();
        const component = shallow(<Button onClick={mockCallBack} />);
        expect(mockCallBack.mock.calls.length).toEqual(0);
        component.find(".btn").simulate("click");
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
    
});
