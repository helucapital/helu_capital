export const utils = {
  p: (value) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value) => ({
    paddingTop: value,
  }),
  pr: (value) => ({
    paddingRight: value,
  }),
  pb: (value) => ({
    paddingBottom: value,
  }),
  pl: (value) => ({
    paddingLeft: value,
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value) => ({
    marginTop: value,
  }),
  mr: (value) => ({
    marginRight: value,
  }),
  mb: (value) => ({
    marginBottom: value,
  }),
  ml: (value) => ({
    marginLeft: value,
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value) => ({ textAlign: value }),

  fd: (value) => ({ flexDirection: value }),
  fw: (value) => ({ flexWrap: value }),

  ai: (value) => ({ alignItems: value }),
  ac: (value) => ({ alignContent: value }),
  jc: (value) => ({ justifyContent: value }),
  as: (value) => ({ alignSelf: value }),
  fg: (value) => ({ flexGrow: value }),
  fs: (value) => ({ fontSize: value }),
  fb: (value) => ({ flexBasis: value }),

  bg: (value) => ({
    backgroundColor: value,
  }),

  br: (value) => ({
    borderRadius: value,
  }),
  btrr: (value) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value) => ({ boxShadow: value }),

  lh: (value) => ({ lineHeight: value }),

  ox: (value) => ({ overflowX: value }),
  oy: (value) => ({ overflowY: value }),

  pe: (value) => ({ pointerEvents: value }),
  us: (value) => ({ WebkitUserSelect: value, userSelect: value }),

  size: (value) => ({
    width: value,
    height: value,
  }),

  linearGradient: (value) => ({
    backgroundImage: `linear-gradient(to bottom right,${value}, rgba(37,99,235,0))`,
  }),

  appearance: (value) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  userSelect: (value) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  backgroundClip: (value) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};
