import { shallow } from 'enzyme';
import React, { Component } from 'react';
import CounterButton from './CounterButton';


const setUp = (props) => shallow(<CounterButton {...props} />);

describe("<CountButton />", () => {
    let component;
    let instance;

    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });

    it("should correctly render component CountButton", () => {
        expect(component).toMatchSnapshot();
    });
    describe("CountButton handlers", () => {
        it("should changecount value to plus", () => {
            const btn = component.find(".plusOneBtn");
            btn.simulate("click");
            // expect(component).toMatchSnapshot(); // можно использовать, но не очень удобно для больших компонентов
            expect(component.state().count).toBe(1) // change state
        });

        // Variant #1
        it("should reset count value to 10", () => {
            const btn = component.find(".resetBtn");
            btn.simulate("click");
            expect(component.state().count).toBe(10) // change state
        });
        // Variant #2
        it("should reset count value to custom value", () => {
            instance.handleReset(20)
            expect(component.state().count).toBe(20) // change state
        });
    });
})
