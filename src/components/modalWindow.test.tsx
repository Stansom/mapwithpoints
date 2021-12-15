import React from 'react';
import { render } from '@testing-library/react';
import { ModalWindow } from './modalWindow';

describe('Modal Window', () => {
	it('renders successfully', () => {
		const { container } = render(<ModalWindow />);
		expect(container.innerHTML).toMatch('Enter a number please');
	});
});
