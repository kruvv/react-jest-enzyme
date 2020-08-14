import { shallow } from 'enzyme';
import React from 'react';
import Post from './Post';



const setUp = (props) => shallow(<Post {...props} />);
describe('should render component Post', ()=> {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('should find className="post" in component Post', () => {
        const wrapper = component.find(".post");
        expect(wrapper.length).toBe(1);
        // Need for rendering component in terminal
        // console.log(component.debug());
    });
    it('should find tag <a> in component Post', () => {
        const wrapper = component.find("a");
        expect(wrapper.length).toBe(1);
    });
    it('should rendr created data', () => {
        const created_at = "02-09-2020";
        component = setUp({created_at});
        const date = component.find(".date");
        expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
    });

    it("should correctly render Post", () => {
        expect(component).toMatchSnapshot();
    })

})
