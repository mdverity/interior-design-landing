import React from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdEmail, MdCall, MdPinDrop } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <FooterContainer fluid>
        <Container className='mt-4'>
          <Row md={12}>
            <FooterContact md={3} className='my-auto justify-content-center'>
              <Row className='justify-content-center text-center'>
                <MdPinDrop className='mt-1 mr-1' size='2em' />
                123 Main Street
                <br />
                New York, NY 10002
              </Row>
              <Row className='justify-content-center mt-3'>
                <MdEmail className='mr-1' size='1.5em' />
                &nbsp;design@design.com
              </Row>
              <Row className='justify-content-center mt-3'>
                <MdCall className='mr-1' size='1.5em' />
                &nbsp;(000) 000-0000
              </Row>
            </FooterContact>
            <FooterLinks md={3} className='text-center my-auto'>
              <Row className='justify-content-center'>
                <Link to='/' className='mt-md-0 mt-5'>
                  Other Projects
                </Link>
              </Row>
              <Row className='justify-content-center'>
                <Link to='/'>Stuff</Link>
              </Row>
              <Row className='justify-content-center'>
                <Link to='/'>Junk</Link>
              </Row>
              <Row className='justify-content-center'>
                <Link to='/'>Things</Link>
              </Row>
            </FooterLinks>
            <Col md={3} className='text-center  mt-md-4 mt-5'>
              <h4>
                Find us on <span>social media!</span>
              </h4>
              <p>We'd love to hear how everything turned out!</p>
            </Col>
            <Col md={3}>
              <SocialWrapper>
                <SocialLink to='/' target='_blank' aria-label='Facebook'>
                  <AiFillFacebook />
                </SocialLink>
                <SocialLink to='/' target='_blank' aria-label='Instagram'>
                  <AiFillInstagram />
                </SocialLink>
                <SocialLink to='/' target='_blank' aria-label='Youtube'>
                  <AiFillYoutube />
                </SocialLink>
                <SocialLink to='/' target='_blank' aria-label='Twitter'>
                  <AiOutlineTwitter />
                </SocialLink>
                <SocialLink to='/' target='_blank' aria-label='GitHub'>
                  <AiFillGithub />
                </SocialLink>
                <SocialLink to='/' target='_blank' aria-label='LinkedIn'>
                  <AiFillLinkedin />
                </SocialLink>
              </SocialWrapper>
            </Col>
          </Row>
          <p className='text-center mt-5 mb-0 pb-5'>Matt Verity © 2021</p>
        </Container>
      </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled(Container)`
  background: #f5f4f3;
  margin-top: 5rem;
  padding-top: 0.5rem;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.15);
`

const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 3.5rem;
  place-items: center;

  @media screen and (max-width: 820px) {
    padding: 1rem 5rem;
  }
`

const FooterContact = styled(Col)`
  font-size: 14px;
`

const FooterLinks = styled(Col)`
  * {
    color: #3d3d3d;
    margin: 2px 0;
    :hover {
      text-decoration: none;
      color: #303030;
      font-weight: 500;
    }
  }
`

const SocialLink = styled.div`
  font-size: 2rem;
  transition: 0.2s ease-out;
  color: #121111;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
