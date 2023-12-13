import { CustomFilter, SearchBar } from ".";
import { fetchCars } from "../api";
import { fuels, yearsOfProduction } from "../constants";
import { QueryParamTypes } from "../types";
import CarCard from "./CarCard";
import ShowMore from "./ShowMore";

const Catalogue = async ({
	searchParams,
}: {
	searchParams: QueryParamTypes;
}) => {
	const { make, model, year, fuelType, limit } = searchParams;

	const allCars = await fetchCars({
		make: make || "",
		model: model || "",
		year: year || "2023",
		fuelType: fuelType || "gas",
		limit: limit || 10,
	});

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<div id="catalogue" className="mt-10 padding-x padding-y max-width">
			<div className="home__text-container">
				<div className="text-4xl font-extrabold">Catalogue</div>
				<p>Explore the cars</p>
			</div>

			<div className="home__filters">
				<SearchBar />

				<div className="home__filter-container">
					<CustomFilter options={yearsOfProduction} fieldName="year" />
					<CustomFilter options={fuels} fieldName="fuelType" />
				</div>
			</div>

			{!isDataEmpty ? (
				<div className="home__cars-wrapper">
					{allCars?.map((car) => (
						<CarCard key={car?.id} car={car} />
					))}
				</div>
			) : (
				<div className="home__error-container">
					<h2 className="text-black text-xl font-bold">Oops, no results</h2>
					<p>{allCars?.message}</p>
				</div>
			)}

			<div className="w-[200px] mx-auto mt-8">
				<ShowMore />
			</div>
		</div>
	);
};

export default Catalogue;
