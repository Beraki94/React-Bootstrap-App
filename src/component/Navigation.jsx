import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    const styles = {
        header: {
            width: "100%",
            height: "64px",
            borderBottom: "1px solid black",
            position: "fixed",
            zIndex: "1000",
    
        },

        img: {
            height: "32px"
        }
    }
  return (
    <header style = {styles.header}>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src='images/GMC.png' alt='gmc-logo' style={styles.img}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#link">Objectives</Nav.Link>
                    <Nav.Link href="#home">Hackerspaces</Nav.Link>
                    <Nav.Link href="#link">About GOMYCODE</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">UI/UX Design</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Software Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Digital Marketing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cyber Security</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cloud Computing</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Navigation