"use client";

import Image from "next/image";
import { CarProps } from "../types";
import { calculateCarRent } from "../utils/calculateRent";
import { CarDetails, CustomButton } from ".";
import { useState } from "react";

interface CarCardProps {
	car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { city_mpg, year, make, model, transmission, drive } = car;

	const carRent = calculateCarRent(city_mpg, year);

	return (
		<div className="car-card group">
			<div className="car-card__content">
				<h2 className="car-card__content-title">
					{make} {model}
				</h2>
			</div>

			<p className="flex mt-6 font-extrabold text-[32px]">
				{/* <span className="font-semibold self-start text-[14px]">$</span>
				<span>{carRent}</span>
				<span className="font-thin self-end text-[14px]">/day</span> */}
			</p>

			<div className="relative w-full h-40 my-3 object-contain">
				<Image
					src="/hero.png"
					alt="car dummy pic"
					className="object-contain"
					priority
					fill
				/>
			</div>

			<div className="relative flex justify-between text-gray group-hover:invisible w-full mt-2">
				<div className="flex justify-center flex-col items-center gap-2">
					<Image
						src="/steering-wheel.svg"
						alt="steering wheel "
						width={20}
						height={20}
					/>
					<p>{transmission === "a" ? "Auto" : "Manual"}</p>
				</div>
				<div className="flex justify-center flex-col items-center gap-2">
					<Image src="/tire.svg" alt="tire" width={20} height={20} />
					<p>{drive?.toUpperCase()}</p>
				</div>
				<div className="flex justify-center flex-col items-center gap-2">
					<Image src="/gas.svg" alt="gas" width={20} height={20} />
					<p>{city_mpg}</p>
				</div>

				<div className="car-card__btn-container group-hover:visible">
					<CustomButton
						title="View More"
						containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
						// rightIcon="/right-arrow.svg"
						textSyles="text-white text-14px"
						handleClick={() => setIsOpen(true)}
					/>
				</div>

				<CarDetails
					isOpen={isOpen}
					closeModal={() => setIsOpen(false)}
					car={car}
				/>
			</div>
		</div>
	);
};

export default CarCard;
