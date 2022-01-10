import React, { useState, useEffect } from 'react'

import { styled } from '../../theme/stitches.config'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion'
import HeluLogo from '../../assets/images/helu_logo.svg'
import Link from 'next/link'
import Box from '../Box'
import Image from "next/image";

const Header = ({ seoData }) => {
  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 }

  }

  const [isOpen, setIsOpen] = useState(false)


  const NavItem = ({ children, to }) => <Link className="nav-item" href={to}><a>{children}</a></Link>


  const NavItems = ({ className, css, ...props }) =>
    <Box
      {...props}
      css={{
        ...css, 'a': {
          mx: '$3',
          color: '$blackA11',
          fontSize: '$2',
          fontWeight: '100',
          textDecoration: 'none',
          '&:hover': {
            color: '$blackA11',
            textDecoration: 'underline',
          },

        },
      }} className={className}>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/team'>Team</NavItem>
      <NavItem to='/properties'>Investments</NavItem>
      <NavItem to='/news'>News</NavItem>
      <NavItem to='mailto:info@helucapital.com'>Contact</NavItem>
      <ButtonWrapper href='https://investors.helucapital.com/login'>Investors Login</ButtonWrapper>
    </Box>
  return (
    <>


      <Wrapper isOpen={isOpen}>

        <Nav >
          <Link href="/">
            <Box as="a" css={{ 'svg': { size: '$space$12' } }}>
              <svg width="117" height="106" viewBox="0 0 117 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7361 67.9719H33.5278V40.5294L15.7361 49.5951V67.9719Z" fill="black" />
                <path d="M56.1021 7.75299L38.3103 16.8182V67.9719H56.1021V7.75299Z" fill="black" />
                <path d="M60.8853 67.9719H78.677V26.4277L60.8853 17.3625V67.9719Z" fill="black" />
                <path d="M83.4736 35.7073V67.9719H101.265V44.7725L83.4736 35.7073Z" fill="black" />
                <path d="M28.0051 82.1837H21.2588V72.7538H15.7361V97.2493H21.2588V87.0301H28.0051V97.2493H33.5278V72.7538H28.0051" fill="black" />
                <path d="M43.8331 86.9551H54.4869V82.3341H43.8331V77.4123H56.1021V72.7538H38.3103V97.2493H56.4777V92.5903H43.8331" fill="black" />
                <path d="M66.408 72.7538H60.8853V97.2493H78.677V92.5903H66.408" fill="black" />
                <path d="M95.9008 88.3829C95.9008 89.8609 95.6192 90.988 95.0557 91.764C94.4922 92.5405 93.6216 92.9285 92.4447 92.9285C91.2669 92.9285 90.3734 92.5405 89.8227 91.764C89.2715 90.988 88.9964 89.8609 88.9964 88.3829V72.7538H83.4736V87.8194C83.4736 91.0254 84.2122 93.4733 85.6902 95.1639C87.1678 96.8549 89.4388 97.6999 92.4447 97.6999C95.425 97.6999 97.6352 96.8549 99.0758 95.1639C100.515 93.4733 101.236 91.0254 101.236 87.8189V72.7538H95.9008" fill="black" />
              </svg>

            </Box>
          </Link>
          <IconButton
            isOpen={isOpen}
            css={{
              display: 'none',
              '@bp2': {
                display: 'block',
                px: '$4'
              },
            }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </IconButton>
          <NavItems css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '@bp2': {
              display: 'none',
              opacity: '0'
            },

          }} />
        </Nav>
        {/* Mobile Nav Items needed to be below the button  */}
        <NavItems
          initial="collapsed"
          animate="open"
          exit="collapsed"
          animate={isOpen ? "open" : "collapsed"}
          variants={variants}
          transition={{ duration: 0.3 }}

          css={{
            display: 'none',
            '@bp2': {
              display: 'none'
            },

          }} className="nav_items" />
      </Wrapper>
    </>
  )
}

export default Header

const Wrapper = styled(motion.nav, {
  variants: {
    isOpen: {
      true: {
        '.nav_items': {
          display: 'none',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          '@bp2': {
            display: 'flex',
            flexDirection: 'column',
            bg: '$blackA2',
            my: '$6',
            py: '$3',
            'a': {
              mb: '$4'
            }
          },
        }
      }
    }
  }
})

const Nav = styled(motion.div, {
  maxWidth: '$4',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  mb: '-$5',
})

const IconButton = styled(motion.div, {
  '&:hover': {
    cursor: 'pointer'
  },
  svg: { size: '$space$4', color: '$primary' },
  variants: {
    isOpen: {
      true: {
        svg: { color: '$blackA8' }
      }
    }
  }
})





const ButtonWrapper = styled("a", {
  border: "$blackA11 1px solid",
  borderRadius: "$1",
  py: '$1',
  px: '$4',
  //on hover the background is filled and color is whiteA12
  transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  '&:hover': {
    background: '$dark',
    border: "$blackA11 1px solid",
    color: 'white !important',
    textDecoration: 'none !important',
  },
});
