export async function fetchCars() {
	const headers = {
		"X-RapidAPI-Key": "ceb32b71d0mshc49238ee204afbbp17a4d6jsnb363bf1a348c",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;

	const response = await fetch(url, { method: "GET", headers: headers });

	const result = await response.json();

	return result;
}
