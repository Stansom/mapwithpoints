import React from 'react';
import { InputForm } from './inputForm';
import { PointsList } from './pointsList';
import { fireEvent, render } from '@testing-library/react';

const setup = () => {
	const utils = render(<InputForm />);
	const form = utils.getByText('Enter points:');
	const input = utils.getByPlaceholderText('enter coordinates here');

	return {
		input,
		form,
		...utils,
	};
};

describe('Input Form', () => {
	it('renders correctly', () => {
		const { container } = render(<InputForm />);
		expect(container.innerHTML).toMatch('Enter points:');
	});
});
