import React, { useState } from 'react';
import './App.css';
import { placemarkType } from './appTypes';
import { PointsList } from './components/pointsList';
import { MapElement } from './components/mapElement';
import { InputForm } from './components/inputForm';

const appStyle = `App container-sm d-flex p-2 flex-column vh-100 vw-100 justify-content-center`;
const h2Style = `text-center text-white bg-primary bg-gradient border border-0 rounded w-30 p-2 align-self-center position-absolute`;
const inputDivStyle = `border border-2 rounded w-100 h-50 mt-1 d-flex flex-column`;
const hrStyle = `w-75 align-self-center mt-0 mb-2 text-gray`;

function App() {
	const defaultCenterOfMap: placemarkType = {
		id: 0,
		lat: 53.2038,
		lon: 50.1606,
	};
	const [placemarks, setPlacemarks] = useState<placemarkType[]>([]);
	const [pathDots, setPathDots] = useState<number[][]>([]);

	function handleFormSubmit(
		event: React.FormEvent<HTMLFormElement>,
		inputRef: React.RefObject<HTMLInputElement>,
		currentInputValue: string
	) {
		event.preventDefault();
		if (inputRef.current && currentInputValue) {
			const coordinatesArray = currentInputValue.split(' ').splice(0, 2);
			if (coordinatesArray[0] && coordinatesArray[1]) {
				const latToNumber = Number(coordinatesArray[0]);
				const longToNumber = Number(coordinatesArray[1]);
				setPlacemarks([
					...placemarks,
					{
						id: placemarks.length++,
						lat: latToNumber,
						lon: longToNumber,
					},
				]);
				setPathDots([...pathDots, [latToNumber, longToNumber]]);
			}
			inputRef.current.value = '';
		}
	}

	function deletePointHandler(placemark: placemarkType) {
		const filteredPlacemarks = placemarks.filter(
			(current) => current.id !== placemark.id
		);
		setPlacemarks(filteredPlacemarks);
		setPathDots(filteredPlacemarks.map((cr) => [cr.lat, cr.lon]));
	}

	function handleDrag(item: any) {
		if (!item.destination) return;
		const items = Array.from(placemarks);
		const [deletedItem] = items.splice(item.source.index, 1);
		items.splice(item.destination.index, 0, deletedItem);
		setPlacemarks(items);
	}

	function handlePlacemarkDrag(event: any, placemark: placemarkType) {
		const [lat, lon] =
			event['originalEvent']['target']['geometry']['_coordinates'];
		const placemarksCopy = Array.from(placemarks);
		const updatedPlacemark = {
			id: placemark.id,
			lat,
			lon,
		};

		placemarksCopy.splice(placemark.id, 1, updatedPlacemark);

		setPlacemarks(placemarksCopy);
		setPathDots(placemarksCopy.map((cr) => [cr.lat, cr.lon]));
	}

	return (
		<div className={appStyle}>
			<h2 className={h2Style} style={{ zIndex: '3', top: '8px' }}>
				Routes Editor
			</h2>
			<MapElement
				placemarks={placemarks}
				pathDots={pathDots}
				defaultCenterOfMap={defaultCenterOfMap}
				handlePlacemarkDrag={handlePlacemarkDrag}
			/>

			{/* INPUT FORM */}
			<div className={inputDivStyle}>
				<InputForm handleFormSubmit={handleFormSubmit} />

				{/* POINTS LIST */}
				<hr className={hrStyle} style={{ height: '2px' }} />
				{placemarks && (
					<PointsList
						handleDrag={handleDrag}
						placemarks={placemarks}
						deletePointHandler={deletePointHandler}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
