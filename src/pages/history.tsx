import { Link } from "react-router-dom";
import "./pages.css";

export default function History() {
  return (
    <div className="history">
      <div className="recently_played">
        <h1>Recently Played</h1>
        <ul>
          <li>
            <div className="card">
              <img
                src="https://tic-tac-toe-multimode-game.netlify.app/1_JhkS75vF0ZQFq26Phhv6Fg.gif"
                className="card-img-top"
                alt="last game"
              />
              <div className="card-body">
                <h3 className="card-title">
                  <span>Player 1</span> vs <span>Player 2</span>
                </h3>
                <p className="card-time">12:00</p>
                <div className="game-result">
                  <span>X(1)</span> - <span>O(0)</span>
                </div>
                <Link to='/game/:gameId' className="btn-card">Play Now</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="last_week_played">
        <h1>Last Week</h1>
        <ul>
          <li>
            <div className="card">
              <img
                src="https://tic-tac-toe-multimode-game.netlify.app/1_JhkS75vF0ZQFq26Phhv6Fg.gif"
                className="card-img-top"
                alt="last game"
              />
              <div className="card-body">
                <h3 className="card-title">
                  <span>Player 1</span> vs <span>Player 2</span>
                </h3>
                <p className="card-time">12:00</p>
                <div className="game-result">
                  <span>X(1)</span> - <span>O(0)</span>
                </div>
                <Link to='/game/:gameId' className="btn-card">Play Now</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
