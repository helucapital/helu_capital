import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import { styled } from '../../theme/stitches.config'

import serializers from './Serializers';
import Box from '../Box'

const PortableText = ({ blocks, css, className }) => (
  <Box initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 0.3,
    }}>

    <Wrapper
      blocks={blocks}
      serializers={serializers} css={css} className={className}
    />
  </Box>
);

export default PortableText;

const Wrapper = styled(BasePortableText, {
  '.highlight': {
    color: '$primary',
  },
});
