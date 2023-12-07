export const buildQueryParam = (
	manufacturer?: string,
	model?: string,
	year?: string,
	fuel?: string
) => {
	const searchParams = new URLSearchParams(window.location.search);

	if (model) {
		searchParams.set("model", model);
	} else searchParams.delete("model");

	if (manufacturer) {
		searchParams.set("make", manufacturer);
	} else searchParams.delete("make");

	if (year) {
		searchParams.set("year", year);
	} else searchParams.delete("year");

	if (fuel) {
		searchParams.set("fuel", fuel);
	} else searchParams.delete("fuel");

	const newQueryParam = `?${searchParams.toString()}`;

	console.log(year);

	return newQueryParam;
};
