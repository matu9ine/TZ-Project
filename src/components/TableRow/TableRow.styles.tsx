import styled from "@emotion/styled";

// Общие стили текста для ячеек
const cellTextStyle = {
  fontFamily: "'Roboto', sans-serif", // Читаемый шрифт
  fontSize: "16px", // Размер шрифта
  color: "#37393D", // Цвет текста
  transition: "background-color 0.3s ease", // Плавный переход для фона
};

export const TableRowRoot = styled.div<{ selected: boolean }>(
  ({ selected }) => ({
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "inherit",
    display: "flex",
    padding: "8px 16px", // Увеличенный отступ для удобства
    borderBottom: "1px solid #EBECEF", // Более мягкий цвет границы
    alignItems: "center",
    gap: "8px", // Увеличенный отступ между ячейками

    // Стили для выбранной строки
    ...(selected && {
      backgroundColor: "#F8F8FA", // Светлый фон для выделенной строки
      color: "#BD68CA", // Цвет текста для выделенной строки
      fontWeight: "bold", // Жирный шрифт для выделенной строки
    }),

    // Эффект при наведении
    "&:hover": {
      backgroundColor: "#f0f4ff", // Легкий синий оттенок при наведении
      cursor: "pointer", // Указатель при наведении
    },
  })
);

export const TableCell = styled.div({
  display: "flex",
  width: "33%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  padding: "8px", // Добавим отступы для удобства
  ...cellTextStyle, // Применяем общие стили текста

  // Эффект при наведении на ячейку
  "&:hover": {
    backgroundColor: "#F0F8FF", // Легкий фон для ячейки при наведении
  },
});
