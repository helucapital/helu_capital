import { motion } from "framer-motion";
import { styled } from '../../theme/stitches.config'

const Wrapper = styled(motion.div)
const FadeIn = ({ children, css, delay }) => {
  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-200px" }}
      transition={{ duration: delay || 0.8 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -150, opacity: 0 }
      }}
      css={{ ...css }}
    >
      {children}
    </Wrapper>
  );
}


export default FadeIn;
