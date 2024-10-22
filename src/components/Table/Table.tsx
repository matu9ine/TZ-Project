import { FC, ReactNode } from "react";
import { TableRoot } from "./Table.styles";

interface TableProps {
  children?: ReactNode;
}

export const Table: FC<TableProps> = ({ children }) => {
  return <TableRoot>{children}</TableRoot>;
};
