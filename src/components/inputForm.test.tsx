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

	it('should not allow letters to be inputted', () => {
		const { input, form } = setup();
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: '23 23' } });
		expect(input.value).toBe('23 23');
	});
});
