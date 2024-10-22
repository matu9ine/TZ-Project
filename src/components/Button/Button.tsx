import { FC, ReactNode } from "react";
import { ButtonRoot } from "./Button.styles";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "contained" | "outlined";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled,
  variant = "contained",
}) => {
  return (
    <ButtonRoot variant={variant} disabled={isDisabled} onClick={onClick}>
      {children}
    </ButtonRoot>
  );
};
