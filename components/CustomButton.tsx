import Image from "next/image";
import { CustomButtonProps } from "../types";

const CustomButton = ({
	title,
	containerStyles,
	textSyles,
	handleClick,
	btnType,
	rightIcon,
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || "button"}
			className={`relative custom-button ${containerStyles}`}
			onClick={handleClick}>
			<span className={`flex-1 ${textSyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						width={20}
						height={20}
						alt="right icon"
						className="absolute right-[10px]"
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
