import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavHeader.css'


function NavHeader() {
  return (
    <div>
            <Navbar expand="lg" className="navbar " >
        <Container>
<Link to={'/'} style={{textDecoration:'none'}}>
                <Navbar.Brand href="#home">
                    
<img src="https://i.postimg.cc/j5zmg5pd/logo.jpg" className='logo me-1 mb-2'
style={{height:'40px',width:'40px'}} alt="" />
                    <span className='fs-4'></span>
                </Navbar.Brand>

</Link>                    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="ms-auto ">

                 <Link to={'/body'} style={{textDecoration:'none'}}>
                        <Nav.Link href="#home">
                        <i class="fa fa-home" aria-hidden="true"></i>

                        </Nav.Link>

                 </Link>
             <Link to={'/about'} style={{textDecoration:'none'}}>
                     
                     <Nav.Link href="#home">
                        <i class="fa-solid fa-user "></i>
    
                            </Nav.Link>
             </Link>


                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavHeader