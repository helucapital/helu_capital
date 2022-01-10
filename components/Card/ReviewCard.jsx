import React from 'react'
import * as Styled from './Card.styles'
import Box from '../Box'
import Text from '../Text'
const ReviewCard = (data) => {


  const { name, headline } = data
  return (
    <Styled.ReviewCard>
      <Box css={{
        h5: {
          lineHeight: '$6'
        }
      }}>
        <Text as="h5">{headline}</Text>
        <Box className="blockWrapper">
          <Box as="p" css={{ color: '$blackA11' }}>{data.body}</Box>
        </Box>
        <Box css={{
          display: 'flex',
          jc: 'flex-start',

          ai: 'center',
          color: '$blackA10',

          svg: { width: '20px', mr: '$3', border: 'solid 1px $blackA10', borderRadius: '50%', p: '$1' }
        }}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>

          <p>{name}</p>
        </Box>
      </Box>



    </Styled.ReviewCard>
  )
}

export default ReviewCard
