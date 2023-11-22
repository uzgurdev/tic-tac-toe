import { Link } from "react-router-dom";
import "./pages.css";

export default function Auth() {
  return (
    <div className="auth">
      <div className="players">
        <div className="register_form">
          <h1 className="register_title">Register Players</h1>
          <form action="singUp">
            <input type="text" placeholder="Username of 1st Player" />
            <input type="text" placeholder="Username of 2nd Player" />
            <button type="submit" className="register_btn">
              <Link to="/game">Register Players</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
