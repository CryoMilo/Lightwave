interface QueryParamTypes {
	make?: string | null;
	model?: string | null;
	year?: string | number | null;
	fuelType?: string | null;
	limit?: number;
}

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
	} else searchParams.delete("model");

	if (make) {
		searchParams.set("make", make);
	} else searchParams.delete("make");

	if (year) {
		searchParams.set("year", year.toString());
	} else searchParams.delete("year");

	if (fuelType) {
		searchParams.set("fuelType", fuelType);
	} else searchParams.delete("fuelType");

	if (limit) {
		searchParams.set("limit", limit.toString());
	} else searchParams.delete("limit");

	const newQueryParam = `?${searchParams.toString()}`;

	return newQueryParam;
};
