import { Link, useNavigate } from "react-router-dom";
import "./pages.css";
import { useState } from "react";
import { handleAuth } from "../utils/api";

export default function Auth() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();

  function handleUserName1(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value || !e.target.value.trim()) return;
    setPlayer1(e.target.value);
  }

  function handleUserName2(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value || !e.target.value.trim()) return;
    setPlayer2(e.target.value);
  }
  return (
    <div className="auth">
      <div className="players">
        <div className="register_form">
          <h1 className="register_title">Register Players</h1>
          <form
            action="singUp"
            onSubmit={() => {
              handleAuth({ player1, player2 });
              if(player1 && player2) navigate("/game/new");
              else alert("Please fill all the fields");
            }}
          >
            <input
              required
              type="text"
              placeholder="Username of 1st Player"
              onChange={handleUserName1}
            />
            <input
              required
              type="text"
              placeholder="Username of 2nd Player"
              onChange={handleUserName2}
            />
            <button type="submit" className="register_btn">
              Register Players
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
