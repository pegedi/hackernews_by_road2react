import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import SimpleTable from './SimpleTable'
import { exportAllDeclaration } from '@babel/types';

describe('SompleTable', () => {
    const props = {
        list: {
                headerRow: ["Title","Author","Comment Num","Points","Dismiss","Update"],
                adat: [{title: 'Egri csillagok', author: "Gárdonyi Géza", num_comments: 0, points: 100},
                       {title: 'Piszkos Fred', author: "Rejtő Jenő", num_comments: 1, points: 101}],
                downLoadLength: 20,
                nbHits: 20,
                count: 2,
        },
        onDismiss: null,
        onUpdate: null,
        onLengthUpdate: null,
        enablePagination: true,
        onAdditionSubmit: null,
    };
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SimpleTable { ...props } />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = TestRenderer.create(
            <SimpleTable { ...props } />, null
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })
});