import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	rightIcon?: string;
	textSyles?: string;
	btnType?: "button" | "submit";
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export type CarPropsArray = CarProps[];

export interface Option {
	title: string;
	value: string;
}

export interface CustomFilterProps {
	options: Option[];
	fieldName: string;
}

export interface QueryParamTypes {
	make?: string | null;
	model?: string | null;
	year?: string | number | null;
	fuelType?: string | null;
	limit?: number;
}
