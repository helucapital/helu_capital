import globalStyles from "../theme/globalStyles";
import { AnimatePresence } from "framer-motion";
import "@fontsource/open-sans/700.css"; // Select either normal or italic.
import "@fontsource/open-sans/300.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";

globalStyles();

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
