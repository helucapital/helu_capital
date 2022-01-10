
import { styled } from '../../theme/stitches.config'
const Box = styled('div', {
  variants: {
    centered: {
      true: {
        "> div": {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }
      },
    }
  }
})

export default Box
