import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    platform: "",
    status: "",
    rating: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`http://localhost:3000/games/${id}`);
      const data = await response.json();

      setFormData(data);
    };

    fetchGame();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/games/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    navigate("/games");
  };

  return (
    <section className="form-page">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Edit Game</h2>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />

        <label>Platform</label>
        <input
          type="text"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          required
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Playing">Playing</option>
          <option value="Completed">Completed</option>
          <option value="Backlog">Backlog</option>
          <option value="Dropped">Dropped</option>
        </select>

        <label>Rating</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="10"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Save Changes</button>
      </form>
    </section>
  );
}

export default EditGame;