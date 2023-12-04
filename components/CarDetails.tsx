import { CarProps } from "../types";

interface CarDetailsProps {
	isOpen: boolean;
	car: CarProps;
	closeModal: () => void;
}

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
	return <div>CarDetails</div>;
};

export default CarDetails;
