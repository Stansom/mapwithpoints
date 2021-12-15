import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { pointsListItemPropsType } from '../appTypes';

const liStyle = `row w-100 mt-1 align-items-center`;
const h5Style = `col-3 text-start px-3`;
const h6Style = `col-3 text-start px-0`;
const buttonStyle = `btn btn-outline-danger btn-sm col-3`;

export const PointsItem = ({
	placemark,
	deletePointHandler,
	index,
}: pointsListItemPropsType) => {
	return (
		<Draggable key={placemark.id} draggableId={placemark.id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<li className={liStyle}>
						<h5 className={h5Style}>Point #{placemark.id.replace(/id/, '')}</h5>
						<h6 className={h6Style}>Latitude: {placemark.lat.toFixed(4)}</h6>
						<h6 className={h6Style}>Longitude: {placemark.lon.toFixed(4)}</h6>
						<button
							className={buttonStyle}
							onClick={() => deletePointHandler(placemark)}
						>
							DELETE
						</button>
					</li>
				</div>
			)}
		</Draggable>
	);
};
