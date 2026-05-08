import { Link } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="hero">
      <h1>Welcome to GameVault</h1>
      <p>
        GameVault is a React web application for managing a personal video game
        collection.
      </p>

      {user ? (
        <Link to="/games" className="hero-btn">
          View My Games
        </Link>
      ) : (
        <Link to="/login" className="hero-btn">
          Get Started
        </Link>
      )}
    </section>
  );
}

export default Home;