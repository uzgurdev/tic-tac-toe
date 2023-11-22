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
    console.log(CellArr);
    setCells([...CellArr]);
    setNextPlayer(NextPlayerApi);
  }, [Cells]);

  console.log("CellArr: ", CellArr);
  console.log("NextPlayer: ", NextPlayer);

  return (
    <div className="board">
      {!Cells ? (
        <button>
          <Link to="/auth">I guess you are not registered yet 🧐</Link>
        </button>
      ) : (
        Cells.map((cell: Games.Cell, index) => {
          console.log("cell: ", cell);
          return (
            <Cell
              key={index}
              value={cell}
              handleCell={() => {
                console.log("cell: ", cell);
                handleCell(NextPlayerApi, index);
              }}
            />
          );
        })
      )}
    </div>
  );
}
