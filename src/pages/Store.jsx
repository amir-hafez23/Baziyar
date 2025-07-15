import GameGrid from "../components/GameGrid";
import { games } from "../data/games";

export default function Store() {
  return (
    <section className="mx-auto max-w-7xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Store</h1>
      <GameGrid games={games} />
    </section>
  );
}
