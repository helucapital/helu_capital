import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import { styled } from '../../theme/stitches.config'

import serializers from './Serializers';
import FadeIn from '../FadeIn'

const PortableText = ({ blocks, css, className }) => (
  <FadeIn>

    <Wrapper
      blocks={blocks}
      serializers={serializers} css={css} className={className}
    />
  </FadeIn>
);

export default PortableText;

const Wrapper = styled(BasePortableText, {
  '.highlight': {
    color: '$primary',
  },
});
