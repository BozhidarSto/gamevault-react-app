import { Link } from "react-router-dom";

function GameCard({ game, onDelete }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />

      <div className="game-card-content">
        <h3>{game.title}</h3>
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

        <div className="card-actions">
          <Link to={`/games/${game.id}`} className="btn">
            Details
          </Link>
          <Link to={`/edit-game/${game.id}`} className="btn secondary">
            Edit
          </Link>
          <button onClick={() => onDelete(game.id)} className="btn danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;