"use client";

import { useState } from "react";
import { CustomButton } from ".";
import { buildQueryParams } from "../utils/buildQueryParams";
import { useRouter, useSearchParams } from "next/navigation";

const ShowMore = () => {
	const params = useSearchParams();

	const [limit, setLimit] = useState(20);
	const router = useRouter();

	const onClick = async () => {
		params.get("limit") === "10" ? setLimit(20) : setLimit(limit + 10);

		const updatedQueryString = buildQueryParams({
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
