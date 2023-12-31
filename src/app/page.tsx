import Hero from "../../components/Hero";
import { Catalogue } from "../../components";

export default function Home({ searchParams }: any) {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Catalogue searchParams={searchParams} />
		</main>
	);
}
