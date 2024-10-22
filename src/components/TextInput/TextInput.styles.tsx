import styled from "@emotion/styled";

// Общие стили текста
const inputTextStyle = {
  fontFamily: "'Roboto', sans-serif",  // Читаемый шрифт
  fontSize: "16px", // Размер шрифта
  color: "#2D2F33", // Цвет текста
  transition: "border-color 0.3s ease, box-shadow 0.3s ease", // Плавные анимации
};

export const TextInputRoot = styled.input({
  boxSizing: "border-box",
  width: "100%",
  height: "40px",
  borderRadius: "8px",
  border: "1px solid #D8DAE0",
  background: "#fff",
  textAlign: "start",
  padding: "10px 12px",

  ...inputTextStyle,

  // Эффекты для состояния фокуса
  "&:focus": {
    borderColor: "#1890FF", // Цвет границы при фокусе
    boxShadow: "0 0 5px rgba(24, 144, 255, 0.3)", // Легкая тень при фокусе
    outline: "none", // Убираем стандартное выделение
  },

  // Псевдоэлементы для кроссбраузерной совместимости
  "&::WebkitOuterSpinButton, &::WebkitInnerSpinButton": {
    WebkitAppearance: "none",
    margin: "0",
  },

  // Псевдоэлементы для placeholder
  "&::placeholder": {
    color: "#A1A1A1", // Цвет плейсхолдера
    fontStyle: "italic", // Итальянский стиль для плейсхолдера
  },

  // Эффект при наведении
  "&:hover": {
    borderColor: "#A1A1A1", // Цвет границы при наведении
  },
});
