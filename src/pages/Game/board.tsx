import { useEffect, useState } from "react";
import { CellArr, NextPlayerApi, handleCell } from "../../utils/api";
import Cell from "./cell";
import { Games } from "../../utils/types";
import { Link } from "react-router-dom";

let NextPlayer: Games.Player = "X";

export default function Board() {
  const [Cells, setCells] = useState<Games.Board>([]);
  const [NextPlayer, setNextPlayer] = useState<Games.Player>(NextPlayerApi);

  useEffect(() => {
    setTimeout(() => {
      console.log(CellArr);
      setCells([...CellArr]);
      setNextPlayer(NextPlayerApi);
      console.log("new Cells: ", Cells);
    }, 1000);
  }, []);

  return (
    <div className="board">
      {!Cells ? (
        <button>
          <Link to="/auth">I guess you are not registered yet 🧐</Link>
        </button>
      ) : (
        CellArr.map((cell: Games.Cell, index) => (
          <Cell
            key={index}
            value={cell}
            handleCell={() => handleCell(NextPlayerApi, index)}
          />
        ))
      )}
    </div>
  );
}
