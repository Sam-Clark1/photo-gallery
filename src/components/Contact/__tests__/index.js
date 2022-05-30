import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('contact component', () => {
    it('render', () => {
        render(<ContactForm></ContactForm>)
    });

    it('snapshot', () => {
        const {asFragment} = render(<ContactForm></ContactForm>);

        expect(asFragment()).toMatchSnapshot();
    });
});