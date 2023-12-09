"use client";

import { useState } from "react";
import { CustomButton } from ".";
import { buildQueryParams } from "../utils/buildQueryParams";
import { useRouter, useSearchParams } from "next/navigation";

const ShowMore = () => {
	const [limit, setLimit] = useState(10);
	const router = useRouter();
	const params = useSearchParams();

	const onClick = () => {
		params.get("limit") !== null ? setLimit(limit + 10) : setLimit(10);

		const updatedQueryString = buildQueryParams({
			make: params.get("make")?.toLowerCase() || "",
			model: params.get("model")?.toLowerCase() || "",
			year: params.get("year")?.toLowerCase() || "",
			fuelType: params.get("model")?.toLowerCase() || "",
			limit: limit,
		});

		router.push(updatedQueryString, { scroll: false });
	};

	return (
		<CustomButton
			title="View More"
			containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
			textSyles="text-white text-14px"
			handleClick={onClick}
		/>
	);
};

export default ShowMore;
