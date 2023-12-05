"use client";

import { Dialog } from "@headlessui/react";
import { CarProps } from "../types";
import Image from "next/image";

interface CarDetailsProps {
	isOpen: boolean;
	car: CarProps;
	closeModal: () => void;
}

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
	const {
		city_mpg,
		class: carClass,
		combination_mpg,
		cylinders,
		displacement,
		fuel_type,
		year,
		make,
		model,
		highway_mpg,
		transmission,
		drive,
	} = car;

	return (
		<Dialog open={isOpen} onClose={closeModal} className="relative z-50">
			{/* The backdrop, rendered as a fixed sibling to the panel container */}
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />

			{/* Full-screen container to center the panel */}
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				{/* The actual dialog panel  */}
				<Dialog.Panel className="relative mx-auto max-w-lg rounded-[10px] bg-white w-full">
					<div className="m-8">
						<div className="relative w-full h-40 my-3 object-contain bg-pattern bg-cover rounded-[10px]">
							<Image
								src="/hero.png"
								alt="car dummy pic"
								className="object-contain py-4"
								priority
								fill
							/>
						</div>
						<Dialog.Title>
							<h2 className="car-card__content-title">
								{make} {model}
							</h2>
						</Dialog.Title>
						<div className="grid grid-cols-2 mt-6">
							<div className="flex flex-col gap-4 text-[14px] text-gray-400">
								<span>City Mpg</span>
								<span>Class</span>
								<span>Combination Mpg</span>
								<span>Cylinders</span>
								<span>Displacement</span>
								<span>Drive</span>
								<span>Fuel Type</span>
								<span>Highway Mpg</span>
								<span>Make</span>
								<span>Model</span>
								<span>Transmission</span>
								<span>Year</span>
							</div>
							<div className="text-right flex flex-col gap-4 text-[14px]">
								<span>{city_mpg}</span>
								<span>{carClass}</span>
								<span>{combination_mpg}</span>
								<span>{cylinders}</span>
								<span>{displacement}</span>
								<span>{drive}</span>
								<span>{fuel_type}</span>
								<span>{highway_mpg}</span>
								<span>{make}</span>
								<span>{model}</span>
								<span>{transmission}</span>
								<span>{year}</span>
							</div>
						</div>
					</div>

					<div
						className="absolute right-4 top-4 p-[5px] bg-white rounded-full cursor-pointer"
						onClick={closeModal}>
						<Image src="/close.svg" alt="close" width={20} height={20} />
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};

export default CarDetails;
