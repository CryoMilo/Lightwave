import { snakeCaseToTitleCase } from "./snakeToTitle";

export const dataTransformer = (str: string | number) => {
	if (typeof str !== "number") {
		switch (str) {
			case "awd":
				return "AWD";

			case "rwd":
				return "RWD";

			case "4wd":
				return "4WD";

			case "a":
				return "Auto";

			case "m":
				return "Manual";

			default:
				return snakeCaseToTitleCase(str);
		}
	} else return str;
};
