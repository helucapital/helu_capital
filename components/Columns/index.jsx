import React from 'react'
import Section from '../Section'
import Box from '../Box'
import BasePortableText from '@sanity/block-content-to-react';
import { styled } from '../../theme/stitches.config'
const serializers = {
  types: {
    column: (props) => (
      <BasePortableText blocks={props.node.body} />
    ),
  },
}

const Columns = ({ children, node }) => {
  const columnCount = node.columns.length
  return (
    <Section css={{
      maxWidth: '$4',
      margin: 'auto',
    }}>
      <StyledBasePortableText
        columns={columnCount}
        serializers={serializers} blocks={node.columns}
      />
    </Section>
  )
}


const StyledBasePortableText = styled(BasePortableText, {
  variants: {
    columns: {
      1: {
        '@bp1': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
      },
      2: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '$10',
        '@bp1': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
      },
      3: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '$8',
        '@bp1': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
      },
    }
  }
})
export default Columns
