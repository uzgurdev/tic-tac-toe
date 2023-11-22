import Cell from "./cell";

const Cells = new Array(9).fill(null);

export default function Board() {
  return (
    <div className="board">
      {Cells.map((_, index) => (
        <Cell key={index} value={(index + 1).toString()} />
      ))}
    </div>
  );
}
