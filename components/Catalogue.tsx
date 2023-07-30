import { CustomFilter, SearchBar } from ".";

const Catalogue = () => {
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
		</div>
	);
};

export default Catalogue;
