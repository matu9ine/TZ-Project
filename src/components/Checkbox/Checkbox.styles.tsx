import styled from "@emotion/styled";

export const CheckboxRoot = styled.div<{ isSomeChecked: boolean }>(
  ({ isSomeChecked }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 8px",

    "& input[type=checkbox]": {
      WebkitAppearance: "none",
      appearance: "none",

      width: "20px", // Увеличил размер для лучшего восприятия
      height: "20px",
      borderRadius: "4px", // Радиус для более мягких углов
      border: "2px solid #D0D3DA", // Более толстая граница
      backgroundColor: "#fff",
      outline: "none",
      cursor: "pointer",
      transition: "all 0.3s ease", // Плавный переход для всех состояний
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Легкая тень для объема

      "&:hover": {
        borderColor: "#BD68CA", // Изменение цвета границы при ховере
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", // Более интенсивная тень при ховере
      },
    },

    "& input[type=checkbox]:checked": {
      border: "0",
      backgroundImage: "url(./icons/check.svg)", // Иконка галочки
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#BD68CA", // Цвет фона для checked
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Более насыщенная тень при чеканье
      transition: "all 0.3s ease", // Плавность изменений
    },

    ...(isSomeChecked && {
      "input[type=checkbox]": {
        backgroundImage: "linear-gradient(to right, #D0D3DA, #D0D3DA)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80% 2px",
        backgroundPosition: "center center",
      },
    }),
  })
);
