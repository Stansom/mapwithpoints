import React, { useRef, useState } from 'react';
import { InputFormType } from '../appTypes';
import { ModalWindow } from './modalWindow';

const inputFormStyle = `mb-3 p-2`;

export const InputForm = ({
	handleFormSubmit,
}: // setIsNumber,
// inputRef,
// handleInputChange,
InputFormType) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isNumber, setIsNumber] = useState(true);
	let currentInputValue = '';

	function handleInputChange(setIsNumber: Function) {
		if (inputRef.current) {
			const inputValue = inputRef.current.value;
			if (isNaN(Number(inputValue.replace(/\s/gi, '')))) {
				setIsNumber(false);
				inputRef.current.value = '';
				return;
			}
			setIsNumber(true);

			currentInputValue = inputValue;
		}
	}

	return (
		<form
			action=""
			onSubmit={(ev) => handleFormSubmit(ev, inputRef, currentInputValue)}
		>
			<div className={inputFormStyle}>
				<label htmlFor="coordinatesInput" className="form-label">
					<h2>Enter points:</h2>
				</label>
				{!isNumber ? <ModalWindow /> : ''}

				<input
					ref={inputRef}
					type="text"
					className="form-control"
					id="coordinatesInput"
					placeholder="enter coordinates here (latitude and longitude)"
					autoComplete="off"
					onChange={() => handleInputChange(setIsNumber)}
				/>
			</div>
		</form>
	);
};
