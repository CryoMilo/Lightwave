import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
				<Link href="/" className="flex justify-center items-center">
					<Image
						width={118}
						height={18}
						src="/logo.svg"
						className="object-contain"
						alt="Lightwave logo"
					/>
				</Link>

				<CustomButton
					title="Sign In"
					btnType="button"
					containerStyles="text-primary-blue rounded-full min-w-[130px]"
				/>
			</nav>
		</header>
	);
};

export default Navbar;
