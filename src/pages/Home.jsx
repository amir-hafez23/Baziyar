import GameGrid from "../components/GameGrid";
import { games } from "../data/games";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl p-4">
      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg"
          className="w-full"
        />
      </div>
      <h2 className="mb-4 text-xl font-semibold text-steamAccent">
        Featured & Recommended
      </h2>
      <GameGrid games={games} />
    </section>
  );
}
