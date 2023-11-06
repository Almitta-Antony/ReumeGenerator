import React from "react";
import resumeSvg from "../../assets/resume.svg";
import { Col, Container, Row } from "react-bootstrap";


function Header() {
  return (

    <div className='lp container w-75' >
      <Container>
        <Row className='mt-5'>
          <Col>
            <div className='mt-5'>
              <h1 id='h1'>Resume-generator</h1>
              <p>
                🌟Crafting Your Path to Success<br />

                Are you ready to take the next big step in your career journey?
                 Look no further than Resume, your trusted partner in creating 
                 professional and polished resumes that open doors to new opportunities. 
                 We understand that your resume is your first impression in the 
                 professional world, and we're here to help you make it a memorable one.
              </p>

            </div>

          </Col>

          <Col lg={6} md={12} sm={12} xs={12}>
            <img src={resumeSvg}
              // height="400px"
              // width="500px"
              alt=""
              className='mt-5 p-2  w-100 ' />
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default Header;
