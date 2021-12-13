import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders successfully', () => {
		const { container } = render(<App />);
		expect(container.innerHTML).toMatch('Routes Editor');
	});
});
