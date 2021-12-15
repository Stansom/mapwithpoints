import React from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { MapProps } from '../appTypes';

const MapStyle = `
map-container w-100 h-50 align-self-center
`;

export const MapElement = ({
	placemarks,
	pathDots,
	currentPlacemark,
	handlePlacemarkDrag,
}: MapProps) => {
	return (
		<YMaps>
			<Map
				className={MapStyle}
				state={{
					center: [currentPlacemark.lat, currentPlacemark.lon],
					zoom: 9,
				}}
			>
				{/* PLACEMARKS */}
				{placemarks &&
					placemarks.map((placemark) => (
						<div key={placemark.id}>
							<Placemark
								modules={['geoObject.addon.balloon']}
								geometry={[placemark.lat, placemark.lon]}
								properties={{
									balloonContent: `Latitude: ${placemark.lat.toFixed(4)}
										Longitude: ${placemark.lon.toFixed(4)}`,
									iconContent: `${placemark.id.replace(/id/, '')}`,
								}}
								options={{
									draggable: true,
									hasBalloon: true,
									hideIconOnBalloonOpen: false,
									openBalloonOnClick: true,
								}}
								onDragEnd={(ev: any) => handlePlacemarkDrag(ev, placemark)}
							></Placemark>
							{pathDots.length > 1 && (
								<Polyline
									geometry={pathDots}
									options={{
										balloonCloseButton: false,
										strokeColor: '#000',
										strokeWidth: 4,
										strokeOpacity: 0.5,
									}}
								></Polyline>
							)}
						</div>
					))}
			</Map>
		</YMaps>
	);
};
