import { Link } from "react-router-dom";
import Board from "./board";
import "./game.css";

export default function Index() {
  return (
    <div className="game">
      <div className="game-btns">
        <Link className="game-btn" to="/game/new">
          New Game
        </Link>
        <Link className="game-btn" to="/history">
          Game History
        </Link>
        <Link className="game-btn" to="/">
          Quit game
        </Link>
        <button className="game-btn">
          Reset
        </button>
        <Link className="game-btn" to="/">
          Save
        </Link>
      </div>
      <Board />
    </div>
  );
}
