import React from "react";
import { Navbar, Offcanvas, Container, Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
function Header({ setLoggedIn, loggedIn }) {
    const logout = () => {
        fetch("http://localhost:8080/logout", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if (res.ok) {
                setLoggedIn(false);
            }
        });
    }
    return (
<Navbar bg="light" expand="xl" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">Twitter</Navbar.Brand>
        <Navbar.Toggle aria-controls="navBar" />
          <Navbar.Offcanvas
              id="navBar"
              aria-labelledby="navBar"
              placement="end"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="navBar">
               Twitter
              </Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body
            className="align-items-center justify-content-between"
                    >
            {
                loggedIn ? <Button onClick={logout}>Logout</Button> :
                <div>
                <RegisterModal className="m-4"/>
                <LoginModal setLoggedIn={setLoggedIn} />
                </div>
            }

        </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    );
}

export default Header;