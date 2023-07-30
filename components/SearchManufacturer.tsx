"use client";

import { Combobox } from "@headlessui/react";
import { SearchManufacturerProps } from "../types";

const SearchManufacturer = ({
	manufacturer,
	setManufacturer,
}: SearchManufacturerProps) => {
	return (
		<div>
			<Combobox>
				<Combobox.Input />
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
