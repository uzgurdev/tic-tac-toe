
interface CellProps {
    value: string;
}
export default function Cell({value}: CellProps) {
  return (
    <div className="cell">{value}</div>
  )
}
