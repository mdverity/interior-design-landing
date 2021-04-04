import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products1 from '../assets/images/products1small.jpg'
import products2 from '../assets/images/products2small.jpg'
import products3 from '../assets/images/products3small.jpg'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Showcase = () => {
  const animation1 = useAnimation()

  const animation2 = useAnimation()

  const animation3 = useAnimation()

  const [itemOne, itemOneView] = useInView({
    triggerOnce: true,
    rootMargin: '150px',
  })

  const [itemTwo, itemTwoView] = useInView({
    triggerOnce: true,
    rootMargin: '150px',
  })

  const [itemThree, itemThreeView] = useInView({
    triggerOnce: true,
    rootMargin: '150px',
  })

  useEffect(() => {
    if (itemOneView) {
      animation1.start('visible')
    }
  }, [animation1, itemOneView])

  useEffect(() => {
    if (itemTwoView) {
      animation2.start('visible')
    }
  }, [animation2, itemTwoView])

  useEffect(() => {
    if (itemThreeView) {
      animation3.start('visible')
    }
  }, [animation3, itemThreeView])

  return (
    <Container id='showcase'>
      <motion.div
        id='showcase'
        ref={itemOne}
        animate={animation1}
        initial='hidden'
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 150 },
        }}
        className='mx-auto'
        style={{ width: '90%' }}
      >
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis culpa praesentium ullam qui illum laudantium, quibusdam
                quas commodi iure deserunt.
              </p>
            </div>
          </Col>
        </Row>
      </motion.div>
      <SpacerSM />
      <motion.div
        id='showcase'
        ref={itemTwo}
        animate={animation2}
        initial='hidden'
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 150 },
        }}
        className='mx-auto'
        style={{ width: '90%' }}
      >
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
                distinctio soluta impedit, quasi natus repellat. Ipsum, sint
                odio necessitatibus, enim ipsa hic voluptatibus quis consequatur
                voluptatem iste quam rerum placeat?
              </p>
            </div>
          </Col>
        </Row>
      </motion.div>
      <SpacerSM />
      <motion.div
        id='showcase'
        ref={itemThree}
        animate={animation3}
        initial='hidden'
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 150 },
        }}
        className='mx-auto'
        style={{ width: '90%' }}
      >
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
      </motion.div>
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
