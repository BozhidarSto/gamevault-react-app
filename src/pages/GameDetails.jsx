import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`http://localhost:3000/games/${id}`);
      const data = await response.json();

      setGame(data);
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <p>Loading game details...</p>;
  }

  return (
    <section className="details-page">
      <div className="details-card">
        <img src={game.image} alt={game.title} />

        <div>
          <h1>{game.title}</h1>
          <p>
            <strong>Genre:</strong> {game.genre}
          </p>
          <p>
            <strong>Platform:</strong> {game.platform}
          </p>
          <p>
            <strong>Status:</strong> {game.status}
          </p>
          <p>
            <strong>Rating:</strong> {game.rating}/10
          </p>
          <p>
            <strong>Description:</strong> {game.description}
          </p>

          <Link to="/games" className="btn">
            Back to Games
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GameDetails;