import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-center items-center px-6 py-4 sm:px-16">
				<Link href="/" className="flex justify-center items-center">
					<Image
						width={170}
						height={170}
						src="/logo.png"
						className="object-contain"
						alt="Lightwave logo"
					/>
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
