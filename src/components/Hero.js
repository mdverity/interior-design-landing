import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { FaArrowCircleDown } from 'react-icons/fa'
import hero1 from '../assets/images/hero1.jpg'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroContainer
      id='hero'
      fluid
      className='d-flex flex-column align-items-center justify-content-center'
    >
      <HeroContent
        className='d-flex flex-column align-items-center justify-content-center mt-5 '
        style={{ textShadow: '0 2px 3px rgba(0,0,0,0.2)' }}
      >
        <h1 variant='h1' className='h1'>
          We only offer the{' '}
          <small>
            <strong>FINEST</strong>
          </small>{' '}
          services.
        </h1>
        <h3 variant='h3' className='h3'>
          Check out our showcase below.
        </h3>
      </HeroContent>
      <Link
        to='showcase'
        smooth={true}
        style={{
          color: '#303030',
          cursor: 'pointer',
          marginTop: '2rem',
        }}
      >
        <FaArrowCircleDown size='4em' />
      </Link>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled(Jumbotron)`
  background: url(${hero1}) no-repeat center;
  height: 650px;
  border-bottom: 1px solid #303030;
`
const HeroContent = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: rgba(245, 244, 243, 0.5);
  /* color: #303030; */
`
