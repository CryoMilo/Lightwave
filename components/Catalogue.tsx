import { CustomFilter, SearchBar } from ".";
import { fetchCars } from "../api";
import CarCard from "./CarCard";

const Catalogue = async () => {
	const allCars = await fetchCars("toyota");

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<div className="mt-10 padding-x padding-y max-width">
			<div className="home__text-container">
				<div className="text-4xl font-extrabold">Catalogue</div>
				<p>Explore the cars</p>
			</div>

			<div className="home__filters">
				<SearchBar />

				<div className="home__filter-container">
					<CustomFilter />
					<CustomFilter />
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
		</div>
	);
};

export default Catalogue;
