import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import Posts2 from './Posts-2';

const setUp = (props) => shallow(<Posts2 {...props} />);
describe('<Posts-2 />', () => {
    const DEFAULT_PAGE = 10;
    let component;
    let instance;

    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });
    afterEach(cleanup);
    it('should correctly render Posts-2', () => {
        expect(component).toMatchSnapshot();
    });

    describe('Posts2 handlers', () => {
        it('should handle search input value', () => {
            expect(component.state().searchQuery).toBe(""); // cheked empty state
            instance.handleInputChange({ target: { value: "test" } }); // add value in state
            expect(component.state().searchQuery).toBe("test");  // cheked new state
        });
        it('should handle change hits value', () => {
            expect(component.state().hitsPerPage).toBe(20);
            instance.handleHitsChange({ target: { value: String(DEFAULT_PAGE) } });
            expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE);
        });
        it("should handle change page if 'Enter' clicked", () => {
            instance.setState({ page: DEFAULT_PAGE });
            instance.getSearch({ key: "Enter" });
            expect(component.state().page).toBe(0);
        });
        it("should handle not change page if 'a' button is clicked", () => {
            instance.setState({ page: DEFAULT_PAGE });
            instance.getSearch({ key: "a" });
            expect(component.state().page).toBe(DEFAULT_PAGE);
        });
    });
});
