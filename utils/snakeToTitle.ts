export const snakeCaseToTitleCase = (str: string) => {
	// Split the string into words using underscores
	const words = str.split("_");

	// Capitalize the first letter of each word and join them with a space
	const titleCaseStr = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return titleCaseStr;
};
