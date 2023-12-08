export const buildQueryParams = (manufacturer?: string, model?: string) => {
	const searchParams = new URLSearchParams(window.location.search);

	if (model) {
		searchParams.set("model", model);
	} else searchParams.delete("model");

	if (manufacturer) {
		searchParams.set("make", manufacturer);
	} else searchParams.delete("make");

	const newQueryParam = `?${searchParams.toString()}`;

	return newQueryParam;
};

export const updateQueryParams = (fieldName: string, value: string) => {
	const searchParams = new URLSearchParams(window.location.search);

	searchParams.set(fieldName, value.toLowerCase());

	console.log(window.location.search);

	const newPathName = `${
		window.location.search === "" ? "?" : "&"
	}${searchParams}`;

	return newPathName;
};
