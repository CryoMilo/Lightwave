"use client";

import { Listbox, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CustomFilterProps, QueryParamTypes } from "../types";
import { useRouter, useSearchParams } from "next/navigation";
import { buildQueryParams } from "../utils/buildQueryParams";

const CustomFilter: FC<CustomFilterProps> = ({ options, fieldName }) => {
	const params = useSearchParams();

	const [selected, setSelected] = useState(
		params.get(fieldName) || options[0].value
	);

	const router = useRouter();

	const handleChange = (data: string) => {
		setSelected(data);

		const currentQuery: QueryParamTypes = {
			year:
				(fieldName === "year" && data.toLowerCase()) ||
				params.get("year")?.toLowerCase(),
			fuelType:
				(fieldName === "fuelType" && data.toLowerCase()) ||
				params.get("fuelType")?.toLowerCase(),
			limit: 10,
		};

		const newQueryString = buildQueryParams(currentQuery);

		router.push(newQueryString, { scroll: false });
	};

	return (
		<Listbox value={selected} onChange={handleChange}>
			<div className="relative w-[130px]">
				<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
					<span className="block truncate">
						{selected === "" ? options[0].title : selected}
					</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
						{options.map((item) => (
							<Listbox.Option
								key={item.title}
								className={({ active }) =>
									`relative cursor-default select-none py-2 px-4 ${
										active ? "bg-blue-500 text-white" : "text-gray-900"
									}`
								}
								value={item.value}>
								{({ selected }) => (
									<span
										className={`block truncate ${
											selected ? "font-medium" : "font-normal"
										}`}>
										{item.title}
									</span>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default CustomFilter;
