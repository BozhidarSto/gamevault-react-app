import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    const foundUser = users.find(
      (user) =>
        user.email.trim() === formData.email.trim() &&
        user.password.trim() === formData.password.trim()
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      navigate("/games");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <section className="form-page">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="admin@test.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="123456"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          No account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;