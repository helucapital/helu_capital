import { styled } from "../../theme/stitches.config";
import { Swiper } from "swiper/react";
import Section from "../Section";

export const Carousel = styled(Swiper, {
  ".swiper": { width: "100%", height: "100%" },
  ".swiper-slide": {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: ["-webkit-box", "-ms-flexbox", "-webkit-flex", "flex"],
    WebkitBoxPack: "center",
    msFlexPack: "center",
    WebkitJustifyContent: "center",
    justifyContent: "center",
    WebkitBoxAlign: "center",
    msFlexAlign: "center",
    WebkitAlignItems: "center",
    alignItems: "center",
  },
  ".swiper-slide img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "@bp1": {
    pb: "$6 !important",
  },
});

export const CarouselSection = styled(Section, {
  py: "$8",
  margin: "auto",
  maxWidth: "$3",
  position: "relative",
  ".swiper-button-next:after, .swiper-button-prev:after": {
    fontSize: "22px",
  },
  ".card": {
    p: "$7",
  },
  ".swiper-button-prev, .swiper-button-next": {
    color: "$secondary",
    top: "50px",
  },
  ".swiper-button-prev": {
    right: "100px",
    left: "auto",
  },
  "@bp2": {
    px: "$2",

    ".swiper-button-prev, .swiper-button-next": {
      color: "$secondary",
      top: "70px",
    },
  },
  "@bp1": {
    py: "$1",
    ".swiper-button-prev, .swiper-button-next": {
      display: "none",
    },
  },
});
