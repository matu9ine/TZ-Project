import { FC, RefObject } from "react";
import { TextInputRoot } from "./TextInput.styles";

interface TextInputProps {
  isDisabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  ref?: RefObject<HTMLInputElement>;
  onChange?: (value: string) => void;
}

export const TextInput: FC<TextInputProps> = ({
  defaultValue,
  placeholder = "",
  isDisabled = false,
  ref,
  onChange = () => {},
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      const target = e.target as HTMLInputElement;
      target.blur();
    }
  };

  return (
    <TextInputRoot
      type={"text"}
      ref={ref}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={({ target: { value } }) => {
        onChange(value);
      }}
      onKeyDown={handleKeyDown}
    />
  );
};
