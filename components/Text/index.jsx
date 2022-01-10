
import { styled } from '../../theme/stitches.config';
const Text = styled('p', {
  color: '$dark',
  '.highlight': {
    color: '$primary',
  },
  variants: {
    as: {
      a: {
        width: 'initial'
      }
    },
    size: {
      small: {
        fontSize: "$2",
        lineHeight: "$5",
        fontWeight: "100",
        mb: "$2",
      },
      large: {
        fontSize: "$3",
        color: '$primary'
      }
    }
  }
})

export default Text
