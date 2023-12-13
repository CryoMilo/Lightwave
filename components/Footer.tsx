import Image from "next/image";
import { footerLinks } from "../constants";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="my-20 padding-x padding-y flex flex-col gap-20 sm:flex-row justify-between max-width">
			<div className="text-gray-500">
				<Image
					src="/logo.svg"
					alt="logo"
					width={118}
					height={18}
					className="mb-4"
				/>
				<p>lightwave@2024</p>
				<p>All rights reserved</p>
			</div>

			<div className="flex flex-row flex-wrap gap-20 md:text-right">
				{footerLinks.map(({ title, links }) => (
					<div key={title} className="flex flex-col gap-4">
						<p className="font-bold">{title}</p>
						{links.map((link) => (
							<Link
								className="text-[14px] text-gray-500 hover:text-black"
								href={link.url}
								key={link.title}>
								{link.title}
							</Link>
						))}
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
