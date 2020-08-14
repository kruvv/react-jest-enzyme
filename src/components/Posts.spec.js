import { shallow } from 'enzyme';
import React from 'react';
import Posts from './Posts';
import { cleanup } from '@testing-library/react';

const setUp = (props) => shallow(<Posts {...props} />)
describe('<Posts />', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    afterEach(cleanup);
    it("should correctly render component Posts", () => {
        expect(component).toMatchSnapshot();
        // console.log(component.debug());
    })
})
