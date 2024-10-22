import styled from "@emotion/styled";

export const DrawerRoot = styled.div<{ isAlignRight?: boolean }>(
  ({ isAlignRight }) => ({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
    backgroundColor: "rgba(0,0,0, 0.3)",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: isAlignRight ? "flex-end" : "flex-start",
  })
);

export const DrawerContent = styled.div({
  width: "50%",
  height: "100%",
  backgroundColor: "#fff",
});
