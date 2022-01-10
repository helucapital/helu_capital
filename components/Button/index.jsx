import React from 'react'
import * as Styled from './Button.styles'
import Link from 'next/link'

const Button = ({ children, ...props }) => {

  let link
  let path;

  console.log(props.node)


  const isExternalLink = props.node?.link && !props.node.link_type
  let internalLink


  if (isExternalLink) {
    link = props.node?.link
  }

  if (!isExternalLink) {
    internalLink = props.node?.internal_link[0]?.slug?.current || props.node?.link

    if (props.node?.internal_link[0]?._type === 'person') {
      path = '/team/'
    } else if (props.node?.internal_link[0]?._type === 'post') {
      path = '/news/'
    } else {
      path = '/'
    }
  }

  return !isExternalLink ?
    (<Link href={path + internalLink}>
      <Styled.ButtonWrapper>
        <Styled.Button >
          {children}
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Link>)
    :
    (
      <Styled.ButtonWrapper href={link}>
        <Styled.Button >
          {children}
        </Styled.Button>
      </Styled.ButtonWrapper>
    )
}

export default Button
