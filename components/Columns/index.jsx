import React from 'react'
import Section from '../Section'
import Box from '../Box'
import BasePortableText from '@sanity/block-content-to-react';
import Button from '../Button'
import FadeIn from '../FadeIn'
import { styled } from '../../theme/stitches.config'

const serializers2 = {
  types: {
    button: (props) => (
      <Button {...props} css={{ mt: '$4' }}>{props.node.text}</Button>
    ),
  },
}

const serializers = {
  types: {
    button: (props) => (
      <h1>ass</h1>
    ),
    column: (props) => (
      <BasePortableText blocks={props.node.body} serializers={serializers2} />
    ),
  },
}

const Columns = ({ children, node }) => {

  const columnCount = node.columns.length
  return (
    <Section css={{
      maxWidth: '$4',
      margin: 'auto',
      px: '$4'
    }}>
      <FadeIn>

        <StyledBasePortableText
          columns={columnCount}
          serializers={serializers} blocks={node.columns}
        />
      </FadeIn>
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
