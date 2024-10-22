import styled from "@emotion/styled";

export const TableRoot = styled.div({
  width: "100%",
  maxWidth: "430px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px", // Добавил закругленные углы
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Легкая тень для объема
  overflow: "hidden", // Обрезка контента за границами
  backgroundColor: "#fff", // Белый фон для контраста
});

export const TableContent = styled.div({
  width: "100%",
  maxWidth: "inherit",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowY: "scroll",
  padding: "16px", // Добавил отступы для улучшенного восприятия
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#BD68CA", // Цвет полосы прокрутки
    borderRadius: "4px",
  },
  MsOverflowStyle: "none",
  scrollbarWidth: "thin", // Уменьшенный размер полосы прокрутки
});

export const TableActions = styled.div({
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  justifyContent: "space-between", // Разделяем кнопки по сторонам
  gap: "16px",
  padding: "20px",
  backgroundColor: "#F8F8FA", // Фон для зоны действий
  borderTop: "1px solid #EBECEF", // Разделительная линия
});

export const TableHeader = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Заголовок разделён по сторонам
  boxSizing: "border-box",
  width: "100%",
  height: "44px",
  padding: "0 16px", // Добавил больше отступов для удобства
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "600", // Сделал текст более жирным
  color: "#4A4A4A", // Более тёмный текст для контраста
  backgroundColor: "#EAEAEA", // Лёгкий фон для заголовка
  borderBottom: "2px solid #BD68CA", // Цветная нижняя граница
});

export const TableHeaderSection = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-between", // Элементы заголовка равномерно распределены
  padding: "0 8px", // Дополнительные отступы для воздуха
});
