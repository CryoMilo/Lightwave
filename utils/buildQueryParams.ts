import { QueryParamTypes } from "../types";

export const buildQueryParams = ({
	make,
	model,
	year,
	fuelType,
	limit,
}: QueryParamTypes) => {
	const searchParams = new URLSearchParams(window.location.search);

	if (model) {
		searchParams.set("model", model);
	}

	if (make) {
		searchParams.set("make", make);
	}

	if (year) {
		searchParams.set("year", year.toString());
	}

	if (fuelType) {
		searchParams.set("fuelType", fuelType);
	}

	if (limit) {
		searchParams.set("limit", limit.toString());
	}

	const newQueryParam = `?${searchParams.toString()}`;

	return newQueryParam;
};
