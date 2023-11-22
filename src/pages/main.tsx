import { Link } from "react-router-dom";
import Bg from "../assets/bg";
import "./pages.css";

export default function Main() {
  return (
    <div className="main" style={{ backgroundImage: `url('bg.png')` }}>
      <h1>Tic Tac Toe</h1>
      <div className="main-group">
        <Link className="main-btn" to="/game/:gameId">
          Continue last game
        </Link>

        <Link className="main-btn" to="/game/new">
          Start new game
        </Link>
      </div>
    </div>
  );
}
