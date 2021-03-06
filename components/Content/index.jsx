import React from 'react'
import Section from '../Section'
import Text from '../Text'
import Button from '../Button'
import Box from '../Box'
import BasePortableText from '@sanity/block-content-to-react';
import Image from "../Image"
import FadeIn from '../FadeIn'

const serializers = {
  marks: {
    highlight: ({ children }) => (
      <Text className="highlight" as="span">
        {children}
      </Text>
    ),
  },
  types: {
    button: (props) => (
      <FadeIn>
        <Button {...props} css={{ mt: '$4' }}>{props.node.text}</Button>
      </FadeIn>
    ),
    mainImage: (props) => (
      <FadeIn>
        <Image className="block_content_image" {...props.node} alt={props.node.alt} />
      </FadeIn >
    ),
  },
}


const Content = ({ children, node }) => {
  return (
    <Section css={{ '@bp2': { pb: '$2' } }}>
      <FadeIn>
        <Box
          centered={node.centered}
          css={{
            maxWidth: '$2',
            margin: 'auto',
          }}>

          <BasePortableText blocks={node.body || node.image} serializers={serializers} />
        </Box>
      </FadeIn>
    </Section>

  )
}

export default Content
