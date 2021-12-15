import React from 'react';
import { InputForm } from './inputForm';
import { fireEvent, render } from '@testing-library/react';

describe('Input Form', () => {
	it('renders correctly', () => {
		const { container } = render(<InputForm handleFormSubmit={() => {}} />);
		expect(container.innerHTML).toMatch('Enter points:');
	});

	it('should not allow letters to be entered', () => {
		const { container } = render(<InputForm handleFormSubmit={() => {}} />);
		const input = container.querySelector('input');
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: 'Say no to letters!' } });
		expect(input.value).toBe('');
	});

	it('should allow to numbers', () => {
		const { container } = render(<InputForm handleFormSubmit={() => {}} />);
		const input = container.querySelector('input');
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: '45' } });
		expect(input.value).toBe('45');
	});
});
