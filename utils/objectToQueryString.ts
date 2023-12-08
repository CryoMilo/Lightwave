type QueryParams = Record<string, string | number | boolean>;

const objectToQueryString = (params: QueryParams): string => {
	const queryString = Object.keys(params)
		.map((key) => {
			const value = params[key];

			if (value !== null && value !== undefined) {
				return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
			}

			return "";
		})
		.filter(Boolean)
		.join("&");

	return queryString ? `?${queryString}` : "";
};

// Example usage:
// const params: QueryParams = {
// 	manufacturer: "Toyota",
// 	model: "Camry",
// 	year: 2022,
// 	automatic: true,
// };

// const queryString = objectToQueryString(params);
