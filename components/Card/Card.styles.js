import { styled } from "../../theme/stitches.config";

export const Card = styled("div", {
  borderRadius: "$4",
});

export const ProjectCard = styled("div", {
  img: {
    borderRadius: "$1",
  },
  h4: {
    fontWeight: "600",
  },
});

export const ReviewCard = styled("div", {
  maxWidth: "500px",
  height: "400px",
  textAlign: "left",
  // ".blockWrapper p, h3": {
  //   overflow: "hidden",
  //   WebkitLineClamp: "4",
  //   WebkitBoxOrient: "vertical",
  // },
  // ".blockWrapper p:first-of-type": {
  //   display: "-webkit-box",
  // },
  // ".blockWrapper p, li, ul": {
  //   display: "none",
  // },
});
