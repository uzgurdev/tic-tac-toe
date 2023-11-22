import { IBoard } from "../../utils/types";

export default function Cell({ value, handleCell }: IBoard.ICell) {
  return (
    <button className="cell" onClick={() => handleCell(value, 0)}>
      {value}
    </button>
  );
}
