import Image from "next/image";
import { CustomButton } from ".";
import Link from "next/link";

const Hero = () => {
	// const handleScroll = () => {
	// 	router.push("#catalogue");
	// };

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">
					Drive Away in Minutes: Book, Zoom, Yours
				</h1>
				<p className="hero__subtitle">
					Simplify your car rental journey with our seamless booking process.
				</p>
				<Link href="#catalogue">
					<CustomButton
						title="Explore Cars"
						containerStyles="bg-primary-blue text-white rounded-full mt-10 px-4 py-2"
					/>
				</Link>
			</div>
			<div className="hero__image-container overflow-hidden">
				<div className="hero__image">
					<Image
						src="/car-audi-white.png"
						alt="hero-image"
						fill
						className="object-contain"
					/>
					<div className="hero__image-overlay" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
