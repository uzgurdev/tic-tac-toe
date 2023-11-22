import { Link } from "react-router-dom";
import "./pages.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/history" className="not-found-link">
        Game History List
      </Link>
    </div>
  );
}
