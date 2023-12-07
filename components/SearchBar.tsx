"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	const router = useRouter();

	const updateQuery = (manufacturer: string, model: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set("model", model);
		} else searchParams.delete("model");

		if (manufacturer) {
			searchParams.set("make", manufacturer);
		} else searchParams.delete("make");

		const newQueryParam = `?${searchParams.toString()}`;

		router.push(newQueryParam, { scroll: false });
	};

	const SearchButton = ({ otherStyles }: { otherStyles?: string }) => (
		<button
			type="submit"
			className={`absolute right-2 p-[5px] cursor-pointer ${otherStyles}`}>
			<Image src="/magnifying-glass.svg" alt="search" width={30} height={30} />
		</button>
	);

	const handleSearch = (e: any) => {
		e.preventDefault();

		if (model === "" && manufacturer === "")
			return alert("Fill the search bar");

		updateQuery(manufacturer.toLowerCase(), model.toLowerCase());
	};

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
				<input
					type="text"
					className="searchbar__input"
					placeholder="Corolla"
					value={model}
					onChange={(e) => setModel(e.target.value)}
				/>
				<SearchButton />
			</div>
		</form>
	);
};

export default SearchBar;
