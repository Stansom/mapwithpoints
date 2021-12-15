import React from 'react';
import { render } from '@testing-library/react';
import { PointsList } from './pointsList';

describe('Points List', () => {
	it('renders successfully', () => {
		const { container } = render(
			<PointsList
				handleDrag={() => {}}
				placemarks={[
					{
						id: 'id0',
						lat: 23,
						lon: 23,
					},
					{
						id: 'id1',
						lat: 24,
						lon: 24,
					},
				]}
				deletePointHandler={() => {}}
			/>
		);
		expect(container.querySelectorAll('.list-unstyled')[0]).toBeVisible();
	});

	it('renders points items successfully', () => {
		const container = render(
			<PointsList
				handleDrag={() => {}}
				placemarks={[
					{
						id: 'id0',
						lat: 23,
						lon: 23,
					},
					{
						id: 'id1',
						lat: 24,
						lon: 24,
					},
				]}
				deletePointHandler={() => {}}
			/>
		);
		expect(container.getAllByText('DELETE')[0]).toBeVisible();
	});
});
