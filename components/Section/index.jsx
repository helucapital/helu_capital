
import { styled } from '../../theme/stitches.config'
import { motion } from 'framer-motion'
const Section = styled(motion.section, {
  py: '$7',
  '@bp3': {
    px: '$3',
  },
  '@bp2': {
    px: '$2',
  },
})

export default Section
