import { FC, ReactNode, useEffect } from "react";
import { DrawerContent, DrawerRoot } from "./Drawer.styles";

interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  side?: "left" | "right";
}

export const Drawer: FC<DrawerProps> = ({
  open,
  onClose,
  children,
  side = "left",
}) => {
  useEffect(() => {
    const close = (e: WindowEventMap["keydown"]) => {
      if (e.code === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <>
      {open && (
        <DrawerRoot isAlignRight={side === "right"} onClick={onClose}>
          <DrawerContent onClick={(e) => e.stopPropagation()}>
            {children}
          </DrawerContent>
        </DrawerRoot>
      )}
    </>
  );
};
