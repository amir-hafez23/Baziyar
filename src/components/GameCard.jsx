import { useNavigate } from "react-router-dom";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/store/${game.id}`)}
      className="cursor-pointer overflow-hidden rounded-lg bg-steamPanel transition-transform hover:scale-105"
    >
      <img src={game.img} className="w-full object-cover" />
      <div className="p-3 text-sm">
        <h3 className="line-clamp-1">{game.title}</h3>
        <p className="font-bold text-steamGreen">${game.price}</p>
      </div>
    </div>
  );
}
