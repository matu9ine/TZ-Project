import { FC } from "react";
import { CheckboxRoot } from "./Checkbox.styles";

interface CheckboxProps {
  isChecked?: boolean;
  onChange?: () => void;
  isSomeChecked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  onChange = () => {},
  isSomeChecked,
}) => {
  return (
    <CheckboxRoot
      isSomeChecked={!!isSomeChecked}
      onClick={(e) => e.stopPropagation()}>
      <input onChange={onChange} type="checkbox" checked={isChecked} />
    </CheckboxRoot>
  );
};
