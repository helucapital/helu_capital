import React from 'react'
import Box from '../Box'


import * as Dialog from '@radix-ui/react-dialog';
import * as Styled from './Modal.styles'
import Text from '../Text'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import Button from '../Button'

import { urlFor } from '../../lib/sanity'

const Modal = ({ children, data }) => {

  const { year_built = '', units, address, summary, city_state, href, phone, image } = data
  return (
    <Dialog.Root>
      <Styled.Trigger>
        {children}
      </Styled.Trigger>
      <Dialog.Portal>
        <Styled.StyledOverlay />

        <Styled.StyledContent>
          <Styled.StyledImage alt={address} src={urlFor(image).width(800).height(400).url()} />
          <Box css={{ p: '$4' }}>
            <Dialog.Title>
              <Text as="h3" css={{ color: '$primary' }}>{data.name}</Text>
            </Dialog.Title>

            <Styled.Description>
              {summary ?
                <>

                  <Box css={{ flex: '2' }}>
                    <Text css={{ mb: '$8', color: '$dark' }}>{summary}</Text>
                    {href &&

                      <Text css={{
                        '&:hover': {
                          textDecoration: 'none'
                        }
                      }} target="_blank" href={href}>
                        <Button size="thin" bg="primary">
                          Visit Property
                        </Button>
                      </Text>
                    }
                  </Box>
                  <Box

                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'start',
                      flex: '1',
                      '> div, p, a': {
                        mb: '$3',
                        color: '$dark',
                        fontWeight: '500'
                      },
                      "@bp2": {
                        '> div, p, a': {
                          mb: '$1',
                          color: '$dark',
                          fontWeight: '500',

                        },
                      }
                    }}>
                    <Box>{units} units</Box>
                    <Box css={{ lineHeight: '$4' }}>
                      {address} <br /> {city_state}
                    </Box>
                    <Box>Built: {year_built.split('-')[0]}</Box>
                    {phone && <Text as="a" href={phone}>{phone}</Text>}
                  </Box>
                </>
                :
                <>
                  <Box

                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'start',
                      flex: '1',
                      '> div, p, a': {
                        mb: '$3',
                        color: '$dark',
                        fontWeight: '500'
                      },
                      "@bp2": {
                        '> div, p, a': {
                          mb: '$1',
                          color: '$dark',
                          fontWeight: '500',

                        },
                      }
                    }}>
                    <Box>{units} units</Box>
                    <Box css={{ lineHeight: '$4' }}>
                      {address} <br /> {city_state}
                    </Box>
                    <Box>Built: {year_built.split('-')[0]}</Box>
                    {phone && <Text as="a" href={phone}>{phone}</Text>}
                  </Box>
                </>
              }


            </Styled.Description>
            <Styled.CloseButton>
              <CrossCircledIcon />
            </Styled.CloseButton>
          </Box>
        </Styled.StyledContent>

      </Dialog.Portal >
    </Dialog.Root >
  )
}

export default Modal
