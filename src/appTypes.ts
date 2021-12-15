
export type placemarkType = {
	id: number;
	lat: number;
	lon: number;
};

export type pointsListPropsType = {
	handleDrag: (i: any) => void;
	placemarks: placemarkType[];
    deletePointHandler: (placemark: placemarkType) => void;
};

export type pointsListItemPropsType = {
	placemark: placemarkType;
    deletePointHandler: (placemark: placemarkType) => void;
    index: number;
};

export type MapProps = {
	placemarks: placemarkType[];
    pathDots: number[][];
    defaultCenterOfMap: placemarkType;
    handlePlacemarkDrag: (ev: any, placemark: placemarkType) => void;
}

export type InputFormType = {
    handleFormSubmit : (
        event: React.FormEvent<HTMLFormElement>, 
		inputRef: React.RefObject<HTMLInputElement>,
		currentInputValue: string
        ) => void;
        // setIsNumber: Dispatch<SetStateAction<boolean>>;
    // inputRef: React.LegacyRef<HTMLInputElement>;
    // handleInputChange: () => void;
}