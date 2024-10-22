import { Children, FC, ReactNode } from "react";
import { Checkbox } from "../Checkbox";
import { TableCell, TableRowRoot } from "./TableRow.styles";

interface TableRowProps {
  children?: ReactNode;
  isChecked?: boolean;
  onToggle?: () => void;
  onDoubleClick?: () => void;
}

export const TableRow: FC<TableRowProps> = ({
  children,
  isChecked,
  onToggle,
  onDoubleClick,
}) => {
  return (
    <TableRowRoot selected={!!isChecked} onDoubleClick={onDoubleClick}>
      <Checkbox onChange={onToggle} isChecked={isChecked} />
      {Children.map(children, (child) => (
        <TableCell>{child}</TableCell>
      ))}
    </TableRowRoot>
  );
};
