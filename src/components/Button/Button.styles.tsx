import styled from "@emotion/styled";

// Общие стили текста для кнопок
const buttonTextStyle = {
  fontFamily: "'Montserrat', sans-serif", // Стильный шрифт
  fontSize: "16px", // Размер шрифта
  fontWeight: 600, // Жирный текст
};

export const ButtonRoot = styled.button<{ variant?: "contained" | "outlined" }>(
  ({ variant = "contained" }) => ({
    borderRadius: "12px", // Радиус для более мягких углов
    display: "flex",
    padding: "12px 28px", // Увеличенный отступ для лучшего восприятия
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease", // Плавный переход на все состояния
    ...buttonTextStyle, // Применение общих стилей текста

    ...(variant === "contained" && {
      backgroundColor: "#6F3C91", // Новый цвет фона для кнопки
      border: "1px solid #5A2E7D", // Темнее граница для четкости
      color: "#FFFFFF", // Цвет текста
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Легкая тень

      "&:hover": {
        backgroundColor: "#5A2E7D", // Более темный цвет при наведении
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)", // Более выраженная тень
        transform: "translateY(-3px)", // Эффект "подъема" при наведении
        cursor: "pointer",
      },

      "&:active": {
        backgroundColor: "#4B1E6A", // Цвет при нажатии
        transform: "translateY(0)", // Убираем подъем при нажатии
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.4)", // Уменьшаем тень
      },

      "&:disabled": {
        backgroundColor: "#D1C3D9", // Цвет для отключенной кнопки
        borderColor: "#D1C3D9",
        color: "#AFAFAF", // Цвет текста для отключенной кнопки
        cursor: "not-allowed", // Курсор для disabled
        opacity: 0.8, // Слегка уменьшаем прозрачность
      },
    }),

    ...(variant === "outlined" && {
      backgroundColor: "#FFFFFF", // Фон для кнопки outlined
      border: "2px solid #C0C3CA", // Утолщенная граница для четкости
      color: "#6F3C91", // Цвет текста
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)", // Легкая тень для объема

      "&:hover": {
        backgroundColor: "#F0E7F1", // Легкий фон при наведении
        borderColor: "#6F3C91", // Темнее граница при наведении
        transform: "translateY(-3px)", // Эффект подъема
        cursor: "pointer",
      },

      "&:active": {
        backgroundColor: "#EBE0E6", // Цвет фона при нажатии
        transform: "translateY(0)", // Убираем подъем при нажатии
        borderColor: "#5A2E7D", // Темнее граница при нажатии
      },
    }),
  })
);
