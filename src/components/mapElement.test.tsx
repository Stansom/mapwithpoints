import React from 'react';
import { MapElement } from './mapElement';
import renderer from 'react-test-renderer';

describe('Map Element', () => {
	it('renders correctly', () => {
		const component = renderer.create(
			<MapElement
				placemarks={[]}
				pathDots={[]}
				defaultCenterOfMap={{
					id: 0,
					lat: 0,
					lon: 0,
				}}
				handlePlacemarkDrag={() => {}}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
