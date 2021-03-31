import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products1 from '../assets/images/products1small.jpg'
import products2 from '../assets/images/products2small.jpg'
import products3 from '../assets/images/products3small.jpg'
import styled from 'styled-components'

const Showcase = () => {
  return (
    <Container id='showcase'>
      <Row>
        <Col md={5} className='d-flex order-md-last'>
          <ProductImage src={products1} className='ml-auto' alt='product1' />
        </Col>
        <Col md={1} />
        <Col md={6} className='align-self-center order-md-first'>
          <div>
            <h2
              variant='h2'
              className='h2 mt-md-0 mt-2'
              style={{ color: '#303030' }}
            >
              Here's a Headline
            </h2>
            <p variant='p' style={{ color: '#3d3d3d' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              culpa praesentium ullam qui illum laudantium, quibusdam quas
              commodi iure deserunt.
            </p>
          </div>
        </Col>
      </Row>
      <SpacerSM />
      <Row>
        <Col md={5} className='order-md-first'>
          <ProductImage src={products2} alt='product2' />
        </Col>
        <Col md={1} />
        <Col md={6} className='align-self-center order-md-last'>
          <div>
            <h2
              variant='h2'
              className='h2 mt-md-0 mt-2'
              style={{ color: '#303030' }}
            >
              This is a Title
            </h2>
            <p variant='p' style={{ color: '#3d3d3d' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              distinctio soluta impedit, quasi natus repellat. Ipsum, sint odio
              necessitatibus, enim ipsa hic voluptatibus quis consequatur
              voluptatem iste quam rerum placeat?
            </p>
          </div>
        </Col>
      </Row>
      <SpacerSM />
      <Row>
        <Col md={5} className='d-flex order-md-last'>
          <ProductImage src={products3} className='ml-auto' alt='product1' />
        </Col>
        <Col md={1} />
        <Col md={6} className='align-self-center order-md-first'>
          <div>
            <h2
              variant='h2'
              className='h2 mt-md-0 mt-2'
              style={{ color: '#303030' }}
            >
              We Design Things
            </h2>
            <p variant='p' style={{ color: '#3d3d3d' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              labore error tempora harum sapiente voluptates sunt et ducimus
              consequatur corrupti.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Showcase

const SpacerSM = styled.div`
  height: 2rem;
`

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.25);
`
