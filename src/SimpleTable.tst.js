import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import SimpleTable from './SimpleTable'

describe('SompleTable', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SimpleTable />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});