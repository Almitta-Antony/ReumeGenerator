import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import styles from "./Body.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";


function Body() {
  const colors = ["#239ce2", "violet", "red", "blue", "black"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div>
      <Container >
        <Row>
          
          <Col >
            <div className={styles.container}>
              <Container>
                <Row>
                  <Col className=" text-center" id='h123'> 
                    <p className={styles.heading}>Resume Builder</p>
                    
                  </Col>


                </Row>


              </Container>
              
  
             <div className={styles.main} id='div1'>
                <Editor
                        sections={sections}
                        information={resumeInformation}
                        setInformation={setResumeInformation}
                      />

                
             </div>
              
            
             <Row>
                      <Col className="ms-5" >
                      <div className={styles.colors}>
                            {colors.map((item) => (
                              <span
                                key={item}
                                style={{ backgroundColor: item }}
                                className={`${styles.color} ${activeColor === item ? styles.active : ""
                                  }`}
                                onClick={() => setActiveColor(item)}
                              />
                            ))}
                          </div>
                      </Col>
                      <Col>
                      <ReactToPrint
                            trigger={() => {
                              return (
                                <Row>
                                  <Col className="text-center">
                                    <Button>
                                      Download <ArrowDown />
                                    </Button>

                                  </Col>
                                </Row>
                              );
                            }}
                            content={() => resumeRef.current}
                          />
                      </Col>

                    </Row>
           

                        
            </div>
            

          </Col>
        </Row>
      </Container>
      <hr />
                
     <div className={styles.main} id="div2">
        <Resume
                        ref={resumeRef}
                        sections={sections}
                        information={resumeInformation}
                        activeColor={activeColor}
                      />
  
     </div>

    </div>);
}

export default Body;
