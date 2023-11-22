export namespace IAuth {
  export interface Login {
    username: string;
  }

  export interface IPlayers {
    player1: string;
    player2: string;
  }
}

export namespace Games {
  export type Player = "X" | "O";
  export type Cell = Player | null;
  export type Board = Cell[];

  export interface IGames {
    games: IGame[];
  }

  export interface IGame {
    id: string;
    player1: string;
    player2: string;
    board: Board;
    nextPlayer: Player;
    winner: string;
  }
}

export namespace IEntity {
  export type data = Games.IGame;

  export interface IResponse {
    success: boolean;
    message: string | null;
    data: data;
  }
}

export namespace IBoard {
  export type Cell = Games.Cell;
  export type Board = Games.Board;

  export interface ICell {
    value: Games.Cell;
    handleCell: (cell: Cell, moveIdx: number) => void;
  }
}

export namespace IHistory {
  export interface IHistory {
    id: string;
    player1: string;
    player2: string;
    board: Games.Board;
    nextPlayer: Games.Player;
    winner: string;
  }
}
