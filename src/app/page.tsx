import Hero from "../../components/Hero";
import { Catalogue } from "../../components";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Catalogue />
		</main>
	);
}
