import styled from "@emotion/styled";

export const CompaniesPageRoot = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop: "80px",
});

export const CompaniesPageContentWrapper = styled.div({
  display: "flex",
  width: "100%",
  maxWidth: "900px",
  gap: "40px",
});

export const CompaniesPageDrawerHeader = styled.h4({
  textAlign: "center",
  color: "#737680",
});

export const CompaniesPageDrawerContentWrapper = styled.div({
  boxSizing: "border-box",
  height: "100%",
  position: "relative",
  padding: "20px 40px",
  display: "flex",
  flexDirection: "column",
});

export const CompaniesPageDrawerContent = styled.div({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const CompaniesPageDrawerActions = styled.div({
  display: "flex",
  gap: "8px",
});
