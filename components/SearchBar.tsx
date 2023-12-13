"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { buildQueryParams } from "../utils/buildQueryParams";
import { snakeCaseToTitleCase } from "../utils/snakeToTitle";

const SearchBar = () => {
	const params = useSearchParams();

	const [manufacturer, setManufacturer] = useState(
		snakeCaseToTitleCase(params.get("make") || "")
	);
	const [model, setModel] = useState(
		snakeCaseToTitleCase(params.get("model") || "")
	);
	const router = useRouter();

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
			return alert("Please fill the search bar");

		const updatedQueryString = buildQueryParams({
			make: manufacturer.toLowerCase(),
			model: model.toLowerCase(),
			limit: 10,
		});

		router.push(updatedQueryString, { scroll: false });
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
