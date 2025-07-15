import { useParams } from "react-router-dom";
import { games } from "../data/games";

export default function Game() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) return <p className="p-4">Game not found.</p>;

  return (
    <div className="mx-auto max-w-5xl p-4 lg:flex lg:space-x-8">
      <img src={game.img} className="mb-4 w-full lg:mb-0 lg:w-1/2" />
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{game.title}</h1>
        <p className="my-4 whitespace-pre-line text-sm">{game.desc}</p>
        <p className="text-2xl font-bold text-steamGreen mb-6">
          ${game.price}
        </p>
        <button className="w-full rounded bg-steamGreen py-3 font-semibold hover:opacity-90">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
