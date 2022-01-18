import React from 'react'
import * as Styled from './Card.styles'

import Box from '../Box'
import Modal from '../Modal'
import Text from '../Text'

import { urlFor } from '../../lib/sanity'


const ProjectCard = (data) => {

  const { name, units, address, city_state, year_built = '', image } = data

  return (
    <Modal data={data}>
      <Styled.ProjectCard>
        <Box css={{ height: '300px', '@bp2': { width: '100%' } }}>

          <img src={urlFor(image).width(500).url()} />
        </Box>
        <Box css={{ display: 'flex', mt: '$3', flexDirection: 'column' }}>
          <Box css={{ display: 'flex', jc: 'space-between', ai: 'center' }}>
            <Text css={{ color: '$primary' }} as="h4">{name}</Text>
            <Text css={{ color: '$dark' }}>{units} units</Text>
          </Box>
          <Box css={{ display: 'flex', jc: 'space-between', ai: 'center', color: '$blackA11' }}>
            <Box as="p" css={{ textAlign: 'left' }}>
              {city_state} <br />
              {address}
            </Box>

            {/* <p>Built: {year_built.split('-')[0]}</p> */}
          </Box>
        </Box>

      </Styled.ProjectCard>
    </Modal>
  )
}

export default ProjectCard
