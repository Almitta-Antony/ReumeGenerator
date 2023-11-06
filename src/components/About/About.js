import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutSvg from "../../assets/about.svg";


function About() {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12} xs={12}>
                <img src={aboutSvg} alt="" 
                 className=' p-2  w-100 '
                 style={{height:'400px'}}/>
                </Col>
                <Col className='mt-5'lg={6} md={12} sm={12} xs={12}>
                    <h1>ABOUT US</h1>
                <h5>Resume Generator</h5>
                <p>A passionate team of career experts and technologists who are dedicated to help you reach your full potential. With years of experience in the field, we've seen the transformative power of a well-crafted resume, and we're here to put that power in your hands.
                    <br /><h3> By Almitta Antony</h3>   </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About