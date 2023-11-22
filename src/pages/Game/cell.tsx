import { IBoard } from "../../utils/types";

export default function Cell({ value, handleCell, isDisabled }: IBoard.ICell) {
  console.log("value: ", value);
  return (
    <button
      className="cell"
      onClick={() => {
        console.log("value: ", value);
        handleCell(value, 0);
      }}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
}
