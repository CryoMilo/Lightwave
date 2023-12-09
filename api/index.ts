import { SearchParamProps } from "../types";

export async function fetchCars(searchParams: SearchParamProps) {
	const headers = {
		"X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const { make, model, year, fuelType } = searchParams;

	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuelType}&year=${year}&limit=10`;

	const response = await fetch(url, { method: "GET", headers: headers });

	const result = await response.json();

	return result;
}
