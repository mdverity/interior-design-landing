import React, { useState } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
// import products1 from '../assets/images/products1small.jpg'
import products2 from '../assets/images/products2small.jpg'
import styled from 'styled-components'

const Services = () => {
  const [selected, setSelected] = useState(0)

  let inputStyle =
    selected === 0 ? { fontWeight: '600' } : { fontWeight: '400' }

  let inputStyle2 =
    selected === 1 ? { fontWeight: '600' } : { fontWeight: '400' }

  return (
    <Container id='services'>
      <h1
        className='text-center mt-5'
        style={{
          color: '#303030',
          borderBottom: '1px solid #dec9a8',
        }}
      >
        What We Offer
      </h1>
      <SpacerSM />
      <Card
        className='shadow'
        style={{ background: '#f5f4f3', height: '100%' }}
      >
        <Row>
          <Col md={6}>
            <ToggleContainer
              id='toggle'
              className='d-flex justify-content-center'
            >
              <span onClick={() => setSelected(0)} style={inputStyle}>
                Our Products
              </span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span onClick={() => setSelected(1)} style={inputStyle2}>
                Our Services
              </span>
            </ToggleContainer>
            <TextWrap>
              {selected === 0 && (
                <p id='left'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum, accusamus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  veritatis eum voluptatem repellat dolore vitae. Nihil iusto
                  obcaecati quia eos!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, quas.
                </p>
              )}
              {selected === 1 && (
                <p id='right'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, est?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  nesciunt neque non numquam ipsa distinctio tempore ratione?
                  Doloremque, quo? Enim?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque odit unde rem nesciunt omnis molestias.
                </p>
              )}
            </TextWrap>
          </Col>
          <Col md={6} className='p-0'>
            <ProductImage
              src={products2}
              className='mt-lg-0 mt-4'
              alt='product1'
            />
          </Col>
        </Row>
      </Card>
      <SpacerSM />
    </Container>
  )
}

export default Services

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.35);
`
const SpacerSM = styled.div`
  height: 5rem;
`

const ToggleContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  margin: 10px 10%;
  font-size: 18px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 992px) {
    margin: 10px 5%;
    /* font-size: 16px; */
  }

  * {
    padding: 0 5px;
    margin-bottom: 5px;
    cursor: pointer;
    border-radius: 5px;
    padding-bottom: 2px;
    transition: all 0.2s ease-in-out;
    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`
const TextWrap = styled.div`
  display: grid;
  height: 100%;
  padding: 1rem;
  padding-bottom: 33%;
  place-items: center;
  font-size: 16px;
  @media screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 10%;
  }
`
