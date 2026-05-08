import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkResponse = await fetch(
      `http://localhost:3000/users?email=${formData.email}`
    );

    const existingUsers = await checkResponse.json();

    if (existingUsers.length > 0) {
      setError("User with this email already exists.");
      return;
    }

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    navigate("/login");
  };

  return (
    <section className="form-page">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;