import React from 'react'
import { styled } from '../../theme/stitches.config'
import { urlFor } from '../../lib/sanity'
import Section from '../Section'

const Image = (data) => {
  return (
    <Section css={{ '@bp2': { pb: '$2' } }}>
      <ImageWrapper is_center={data?.image_center} full_width={data?.full_width}>
        <StyledImage placeholder="blur" full_width={data?.full_width} src={urlFor(data.asset._ref).width(1600).url()}   {...data} />
      </ImageWrapper>
    </Section>
  )
}

export default Image

const ImageWrapper = styled('div', {

  position: 'relative',
  maxWidth: '$4',

  margin: 'auto',
  '.block_content_image': {
    height: '300px'
  }
  ,
  variants: {
    full_width: {
      true: {
        width: '100%',
        maxWidth: 'none',
      }
    },
    is_center: {
      true: {
        textAlign: 'center',
      }
    }
  }
})


const StyledImage = styled('img', {
  objectFit: 'cover',
  '@bp2': {
    width: '100%'
  },

  variants: {
    full_width: {
      true: {
        width: '100%',

      }
    }
  }
});