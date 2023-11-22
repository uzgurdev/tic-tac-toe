import { useEffect, useState } from "react";
import {
  CellArr,
  NextPlayerApi,
  handleCell,
  isWinnerApi,
} from "../../utils/api";
import Cell from "./cell";
import { Games } from "../../utils/types";
import { Link } from "react-router-dom";

let NextPlayer: Games.Player = "X";

export default function Board() {
  const [Cells, setCells] = useState<Games.Board>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [NextPlayer, setNextPlayer] = useState<Games.Player>(NextPlayerApi);

  useEffect(() => {
    console.log(CellArr);
    setCells([...CellArr]);
    if (isWinnerApi === "X" || isWinnerApi === "O") {
      setIsWinner(true);
    }
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
              isDisabled={isWinner}
              handleCell={() => {
                console.log("cell: ", cell);
                console.log('is winner: ', isWinner);
                handleCell(NextPlayerApi, index);
              }}
            />
          );
        })
      )}
    </div>
  );
}
