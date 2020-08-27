import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import Posts2 from './Posts-2';


import { NEWS, HITS, BASE_PATH, SEARCH_PARAM, PAGE_HITS, PAGE_PARAM, SEARCH_PATH } from './constants.js';

const mockJsonPromise = Promise.resolve({ hits: NEWS, page: 1, nbPages: 10 });
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

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

    it('should call fetch in componentDidMount', () => {
        expect(global.fetch).toHaveBeenCalledWith(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${0}`);
    });

    describe('updatePage method', () => {
        it("should update state 'page' value", () => {
            instance.updatePage(DEFAULT_PAGE);
            expect(component.state().page).toBe(DEFAULT_PAGE);
        });
        it('should call fetch with given argument', () => {
            instance.updatePage(DEFAULT_PAGE);
            expect(global.fetch).toHaveBeenCalledWith(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&$
{PAGE_PARAM}${DEFAULT_PAGE}`);
        });
    });

    describe('handlePageChange method', () => {
        it("should call 'udatePage' with ngiven argument", () => {
            instance.updatePage = jest.fn();
            instance.setState({ page: DEFAULT_PAGE });
            instance.handlePageChange({
                target: { getAttribute: jest.fn().mockReturnValue("1") },
            });
            expect(instance.updatePage).toHaveBeenCalledWith(1);`   `
        });
        it("should call 'udatePage' with increased value", () => {
            instance.updatePage = jest.fn();
            instance.setState({ page: DEFAULT_PAGE });
            instance.handlePageChange({
                target: { getAttribute: jest.fn().mockReturnValue("prev") },
            });
            expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE - 1);`   `
        });
        it("should call 'udatePage' with decreased value", () => {
            instance.updatePage = jest.fn();
            instance.setState({ page: DEFAULT_PAGE });
            instance.handlePageChange({
                target: { getAttribute: jest.fn().mockReturnValue("next") },
            });
            expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE + 1);`   `
        });

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
