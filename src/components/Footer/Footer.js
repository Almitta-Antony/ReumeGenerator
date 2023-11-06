import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Footer.css'

function Footer() {
    return (

        <div className='footer p-5 mt-2 '>

            <Row >

                <Row className='text-center'>
                    <Col>
                        <p className=' '>Created and Designed by Almitta Antony <br />
                        All rights reserved 2023</p>
                    </Col>

                </Row>

                
                <Col lg={8} md={3} sm={12} xs={12} className='text-start mt-5'>
                    <Row className='ms-5'>
                        <Col>
                            <span >CATEGORIES</span> <br />

                            <Row className=''>
                                <Col>
                                    <span className='f1'>Personal Information</span><br />
                                    <Row>
                                        <Col >
                                            <span className='f1 '>Education</span><br />

                                            <Row>
                                                <Col>

                                                    <span className='f1'>Work Experience</span><br />


                                                    <Row>
                                                        <Col>
                                                            <span className='f1'>Achievements</span><br />
                                                            <Row>
                                                                <Col>
                                                                    <span className='f1'>Projects</span>

                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>


                <Col lg={4} md={6} sm={12} xs={12} className='mt-5'>
                    <i class="fa-sharp fa-solid fa-location-dot me-2 mb-3" style={{ color: 'black' }}></i>CONTACT US <br />
                    <Row>
                        <Col><input type="email" className=' form-control w-75 border-dark ' id='mail' placeholder='enter email ' />

                            <Row>
                                <Col>
                                    <button className='b btn border-dark w-75 text-dark mt-3'>Send</button><br />
                                    <Row>
                                        <Col className=''>
                                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-instagram mt-3 text-dar" ></i>
                                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-twitter mt-3 ms-3 text-dar" ></i>
                                            <i style={{ cursor: 'pointer' }} class="fa-solid fa-envelope mt-3 ms-3 text-dark" ></i>
                                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-github mt-3 ms-3 text-dark"  ></i>
                                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-linkedin mt-3 ms-3 text-dark"></i>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                </Col>


            </Row>
        </div >

    )
}

export default Footer