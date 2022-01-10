import { styled, keyframes } from "../../theme/stitches.config";
import { blackA } from "@radix-ui/colors";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  zIndex: "100",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  zIndex: "100",
  borderRadius: "$1",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "850px",
  maxHeight: "85vh",
  overflowY: "auto",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
  img: {
    height: "100%",
    width: "100%",
    maxHeight: "330px",
    btrr: "$1",
    btlr: "$1",
  },

  "@bp3": {
    width: "90%",
  },
});

export const Trigger = styled(DialogPrimitive.Trigger, {
  appearance: "none",
  border: 0,
  backgroundColor: "transparent",
  padding: 0,
  "&:hover": {
    cursor: "pointer",
  },
});

export const CloseButton = styled(DialogPrimitive.Close, {
  appearance: "none",
  border: 0,
  backgroundColor: "transparent",
  position: "absolute",
  top: "10px",
  right: "10px",
  color: "$whiteA12",
  padding: 0,
  svg: { size: "$space$5" },
  "&:hover": {
    cursor: "pointer",
  },
});

export const Description = styled(DialogPrimitive.Description, {
  display: "flex",
  justifyContent: "space-between",
  gap: "$12",
  "@bp2": {
    flexDirection: "column-reverse",
    gap: "0",
  },
});

export const StyledImage = styled("img", {
  width: "300px",
  height: "320px",
  objectFit: "cover",
});
