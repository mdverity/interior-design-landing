import React, { useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import contactImg from '../assets/images/contact.jpg'
import useForm from '../hooks/useForm'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const animOne = useAnimation()

  const animTwo = useAnimation()

  const [formRef, formView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px',
  })

  const [mapRef, mapView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
  })

  useEffect(() => {
    if (formView) {
      animOne.start('visible')
    }
  }, [animOne, formView])

  useEffect(() => {
    if (mapView) {
      animTwo.start('visible')
    }
  }, [animTwo, mapView])

  const { handleChange, values, handleSubmit } = useForm()

  const API_KEY = process.env.REACT_APP_GMAPS_KEY

  const gMapsAPI =
    'https://www.google.com/maps/embed/v1/place?q=place_id:EiBNYWluIFN0LCBOZXcgWW9yaywgTlkgMTAwNDQsIFVTQSIuKiwKFAoSCfsuPyPFWMKJEfU1z80AKHbzEhQKEgk7CD_TpU_CiRFi_nfhBo8LyA&key=' +
    API_KEY.toString()

  return (
    <Container id='contact'>
      <Row>
        <Col md={12} className='text-center mb-5'>
          <h1
            style={{
              color: '#303030',
              borderBottom: '1px solid #dec9a8',
            }}
          >
            Contact Us
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={7} className='m-auto'>
          <motion.div
            id='showcase'
            ref={formRef}
            animate={animOne}
            initial='hidden'
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, x: -150 },
            }}
          >
            <ContactImage src={contactImg} alt='contact' />
          </motion.div>
        </Col>
        <Col md={5} className='m-md-auto mt-2'>
          <motion.div
            ref={formRef}
            animate={animOne}
            initial='hidden'
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, x: 150 },
            }}
          >
            {/* <Card className='p-2' bg='light'> */}
            <Form name='contact' data-netlify='true' onSubmit={handleSubmit}>
              <Form.Group className='d-flex flex-column' controlId='formEmail'>
                <Form.Control
                  name='email'
                  type='email'
                  className='text-center mt-2'
                  value={values.email}
                  onChange={handleChange}
                  placeholder='Your Email Address'
                  style={{
                    resize: 'none',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '0',
                    borderBottom: '1px solid #7a7a7a',
                  }}
                />
                <Form.Text className='text-muted mx-auto'>
                  <small>We'll never share your email with anyone else.</small>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='formMessage'>
                <Form.Control
                  as='textarea'
                  name='message'
                  className='text-center'
                  placeholder='Your Message'
                  value={values.message}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    resize: 'none',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '0',
                    // paddingTop: '1rem',
                    borderBottom: '1px solid #7a7a7a',
                  }}
                />
              </Form.Group>
              <Form.Group
                name='help-with'
                controlId='formBasicCheckbox'
                className='d-flex flex-column justify-items-center'
              >
                <Form.Label className='text-center'>
                  What can we help you with?
                </Form.Label>
                <div style={{ width: 'fit-content', margin: '0 auto' }}>
                  <Form.Check
                    className='text-dark'
                    type='checkbox'
                    label='Services'
                    name='services'
                    checked={values.services}
                    onChange={handleChange}
                  />
                  <Form.Check
                    className='text-dark'
                    type='checkbox'
                    label='Estimate'
                    name='estimate'
                    checked={values.estimate}
                    onChange={handleChange}
                  />
                  <Form.Check
                    className='text-dark'
                    type='checkbox'
                    label='Products'
                    name='products'
                    checked={values.products}
                    onChange={handleChange}
                  />
                  <Form.Check
                    className='text-dark'
                    type='checkbox'
                    label='Consultation'
                    name='consultation'
                    checked={values.consultation}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              <Button
                className='w-100 mx-auto my-2'
                variant='dark'
                type='submit'
              >
                Submit
              </Button>
            </Form>

            {/* </Card> */}
          </motion.div>
        </Col>
      </Row>
      <motion.div
        ref={mapRef}
        animate={animTwo}
        initial='hidden'
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 150 },
        }}
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: '4rem',
          height: '400px',
        }}
      >
        <iframe
          title='google-maps'
          loading='lazy'
          style={{
            border: '1px solid rgba(100,100,100,0.5)',
            maxWidth: '600px',
            maxHeight: '400px',
            width: '100%',
            height: '100%',
            zIndex: '2',
          }}
          allowFullScreen
          className='mx-auto'
          src={gMapsAPI}
        ></iframe>
      </motion.div>
    </Container>
  )
}

export default Contact

const ContactImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #1c1c1c;
  border-radius: 4px;
`
