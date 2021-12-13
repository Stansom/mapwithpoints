import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { pointsListPropsType } from '../appTypes';
import { PointsItem } from './pointsListItem';

const listStyle = `list-unstyled align-self-start px-2 w-100`;

export const PointsList = ({
	handleDrag,
	placemarks,
	deletePointHandler,
}: pointsListPropsType) => {
	return (
		<DragDropContext onDragEnd={handleDrag}>
			<Droppable droppableId="placemarks">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<ul className={listStyle}>
							{placemarks.map((placemark, index) => (
								<PointsItem
									index={index}
									key={placemark.id}
									placemark={placemark}
									deletePointHandler={deletePointHandler}
								/>
							))}
							{provided.placeholder}
						</ul>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
