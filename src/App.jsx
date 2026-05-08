import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import AddGame from "./pages/AddGame";
import EditGame from "./pages/EditGame";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/games"
            element={
              <ProtectedRoute>
                <Games />
              </ProtectedRoute>
            }
          />

          <Route
            path="/games/:id"
            element={
              <ProtectedRoute>
                <GameDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-game"
            element={
              <ProtectedRoute>
                <AddGame />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-game/:id"
            element={
              <ProtectedRoute>
                <EditGame />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;