import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import App, {Search} from './App.js';


describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = TestRenderer.create(
            <App />, null
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

});

describe('Search', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search>Search</Search>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('has a valid snapshot', () => {
        const component = TestRenderer.create(
            <Search>Search</Search>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});