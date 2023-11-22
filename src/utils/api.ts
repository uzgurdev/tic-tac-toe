import axios from "axios";
import { Games, IAuth, IEntity } from "./types";

let id: any = "";
export let CellArr: Games.Board = [];
let NextPlayerApi: Games.Player = "O" ? "X" : "O";
let isWinnerApi = '';

export function getGames() {
  const data = axios.get(
    "http://localhost:4000/api/tic-tac-toe"
  ) as Promise<IEntity.IResponse>;
  console.log(data);
  return data;
}

export function API() {
  const data = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
  return data;
}

async function handleAuth({ player1, player2 }: IAuth.IPlayers) {
  if (!player1 || !player1.trim()) return;
  if (!player2 || !player2.trim()) return;

  try {
    const response = await axios.post("http://localhost:4000/api/tic-tac-toe", {
      player1,
      player2,
    });

    const game = response.data as IEntity.IResponse;
    console.log("gameID: ", game);

    id = game.data.id;
    CellArr = game.data.board;
    NextPlayerApi = game.data.nextPlayer;
    console.log("id: " + id);

    return game;
  } catch (error) {
    console.error("Error in handleAuth:", error);
    throw error;
  }
}

async function handleCell(cell: Games.Player, moveIdx: number) {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/tic-tac-toe/move/${id}`,
      {
        gameId: id,
        moveIdx,
        cell,
      }
    );

    NextPlayerApi = cell === "X" ? "O" : "X";

    const game = response.data as IEntity.IResponse;
    console.log("response: ", game.data.board);

    CellArr = game.data.board;
    NextPlayerApi = game.data.nextPlayer;
    isWinnerApi = game.data.winner;

    console.log("CellArr: ", CellArr);
    console.log("Game: ", game.data);
    console.log("NextPlayer: ", NextPlayerApi);

    return game;
  } catch (error) {
    console.error("Error in handleCell:", error);
    throw error;
  }
}

export { handleAuth, handleCell, NextPlayerApi, isWinnerApi };
