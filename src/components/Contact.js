import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import contactImg from '../assets/images/contact.jpg'
import useForm from '../hooks/useForm'

const Contact = () => {
  const { handleChange, values, handleSubmit } = useForm()

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
          <ContactImage src={contactImg} alt='contact' />
        </Col>
        <Col md={5} className='m-md-auto mt-2'>
          {/* <Card className='p-2' bg='light'> */}
          <Form netlify onSubmit={handleSubmit}>
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
                  name='Services'
                  checked={values.services}
                  onChange={handleChange}
                />
                <Form.Check
                  className='text-dark'
                  type='checkbox'
                  label='Estimate'
                  name='Estimate'
                  checked={values.estimate}
                  onChange={handleChange}
                />
                <Form.Check
                  className='text-dark'
                  type='checkbox'
                  label='Products'
                  name='Products'
                  checked={values.products}
                  onChange={handleChange}
                />
                <Form.Check
                  className='text-dark'
                  type='checkbox'
                  label='Consultation'
                  name='Consultation'
                  checked={values.consultation}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Button className='w-100 mx-auto my-2' variant='dark' type='submit'>
              Submit
            </Button>
          </Form>
          {/* </Card> */}
        </Col>
      </Row>
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
