"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState();

	const handleSearch = () => {};

	const SearchButton = ({ otherStyles }: { otherStyles?: string }) => (
		<div className={`absolute right-2 p-[5px] cursor-pointer ${otherStyles}`}>
			<Image src="/magnifying-glass.svg" alt="search" width={30} height={30} />
		</div>
	);

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherStyles="sm:hidden" />
			</div>

			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={20}
					height={20}
					alt="model icon"
					className="absolute ml-4"
				/>
				<input type="text" className="searchbar__input" placeholder="Corolla" />
				<SearchButton />
			</div>
		</form>
	);
};

export default SearchBar;
