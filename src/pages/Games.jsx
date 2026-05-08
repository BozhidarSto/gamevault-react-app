import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    const response = await fetch("http://localhost:3000/games");
    const data = await response.json();

    setGames(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (!confirmDelete) {
      return;
    }

    await fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
    });

    setGames(games.filter((game) => game.id !== id));
  };

  if (loading) {
    return <p>Loading games...</p>;
  }

  return (
    <section className="page">
      <h1>My Games</h1>
      <p>Here you can view, edit and delete games from your collection.</p>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}

export default Games;