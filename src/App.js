import './App.css'
import React from 'react'
import styled from 'styled-components'
import { Link, scrollSpy } from 'react-scroll'
import { Jumbotron, Navbar, Nav } from 'react-bootstrap'
import jumbo1 from './assets/images/jumbo1.jpg'
import jumbo2 from './assets/images/jumbo2.jpg'
import Contact from './components/Contact'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import Services from './components/Services'
import { SiAffinitydesigner } from 'react-icons/si'
import Hero from './components/Hero'
// import { RellaxWrapper } from 'react-rellax-wrapper'

function App() {
  scrollSpy.update()
  return (
    <div className='App'>
      <Navbar
        expand='md'
        sticky='top'
        style={{
          background: '#f5f4f3',
          borderBottom: '1px solid rgba(0, 0, 0, 0.33',
        }}
      >
        <Navbar.Brand
          href='#home'
          style={{ fontWeight: '500', fontFamily: 'Montserrat Subrayada' }}
        >
          <SiAffinitydesigner className='mb-1 mr-1' />
          DESIGNLINE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Navlink to='hero' smooth={true} spy={true} offset={-57}>
              Home
            </Navlink>
            <Navlink to='showcase' smooth={true} spy={true} offset={-60}>
              About
            </Navlink>
            <Navlink to='services' smooth={true} spy={true} offset={-100}>
              Services
            </Navlink>
            <Navlink to='contact' smooth={true} spy={true} offset={-100}>
              Contact
            </Navlink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Hero />
      <SpacerLG />
      {/* <RellaxWrapper
        speed={-6}
        percentage={0.3}
        style={{ position: 'relative', maxWidth: '1200px' }}
        className='mx-auto'
      >
        <Parallax style={{ width: '200px', height: '200px', left: '15%' }} />
      </RellaxWrapper> */}
      <Showcase />
      {/* <RellaxWrapper
        speed={3}
        percentage={-1}
        style={{ position: 'relative', maxWidth: '1200px' }}
        className='mx-auto'
      >
        <Parallax style={{ width: '300px', height: '300px', right: '10%' }} />
      </RellaxWrapper> */}
      <Jumbo1 fluid className='mt-5' />
      {/* <RellaxWrapper
        speed={-3}
        percentage={0.6}
        style={{ position: 'relative', maxWidth: '1200px' }}
        className='mx-auto'
      >
        <Parallax style={{ width: '300px', height: '300px', left: '0' }} />
      </RellaxWrapper> */}
      <Services />
      {/* <RellaxWrapper
        speed={5}
        percentage={0.5}
        style={{ position: 'relative', maxWidth: '1200px' }}
        className='mx-auto'
      >
        <Parallax style={{ width: '200px', height: '200px', right: '0' }} />
      </RellaxWrapper> */}
      <Jumbo2 fluid className='mt-5' />
      {/* <RellaxWrapper
        speed={-3}
        percentage={0.2}
        style={{ position: 'relative', maxWidth: '1200px' }}
        className='mx-auto'
      >
        <Parallax style={{ width: '200px', height: '200px', left: '10%' }} />
      </RellaxWrapper> */}
      <SpacerSM />
      {/* <RellaxWrapper
        speed={-4}
        percentage={0}
        style={{ position: 'relative', maxWidth: '1200px' }}
        className='mx-auto'
      >
        <Parallax style={{ width: '200px', height: '200px', right: '5%' }} />
      </RellaxWrapper> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App

const Jumbo1 = styled(Jumbotron)`
  position: relative;
  background: url(${jumbo1}) no-repeat center;
  height: 350px;
  z-index: 2;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`

const Jumbo2 = styled(Jumbotron)`
  position: relative;
  background: url(${jumbo2}) no-repeat center;
  height: 350px;
  z-index: 2;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`

const SpacerLG = styled.div`
  height: 5rem;
`

const SpacerSM = styled.div`
  height: 2rem;
`

// const Parallax = styled.div`
//   background-color: rgba(0, 0, 0, 0.25);
//   z-index: -1;
//   position: absolute;
//   border-radius: 1px;
// `

const Navlink = styled(Link)`
  padding: 0 5px;
  color: #3d3d3d;
  cursor: pointer;
  /* transition: all 0.2s ease-in-out; */

  &.active {
    color: #303030;
    font-weight: 600;
  }

  :hover {
    color: #303030;
    font-weight: 600;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`
