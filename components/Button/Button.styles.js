import { styled } from "../../theme/stitches.config";

export const Button = styled("button", {
  margin: "0",
  color: "$whiteA12",
  bg: "$secondary",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  py: "$2",
  px: "$8",
  font: "inherit",
  fontSize: "$3",
  border: "0",
  fontWeight: "$4",
  borderRadius: "$1",
  cursor: "pointer",
  WebkitAppearance: "button",
  "> *": { pointerEvents: "none" },
  textDecoration: "none",
  transition: "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": { boxShadow: "$md", bg: "$secondary_dark" },

  variants: {
    bg: {
      primary: {
        bg: "$primary",
        "&:hover": { boxShadow: "$md", bg: "$primary_dark" },
      },
      secondary: { bg: "$secondary" },
    },
    size: {
      thin: {
        px: "$8",
        py: "$1",
        fontSize: "$2",
      },
    },
  },
});

export const ButtonWrapper = styled("a", {
  "&:hover": {
    textDecoration: "none",
  },
});
