import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedEmail = localStorage.getItem('email')
    console.log(storedEmail)
    if (storedEmail !== null) {
      setEmail(storedEmail)
    } else {
      setEmail(null)
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="flex justify-content-between w-100 ms-5 me-5">
            <Nav.Link>
              {email !== null && (
                <Link to="/home" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              {email !== null && (
                <Link to="/changepassword" style={{ textDecoration: 'none' }}>
                  Change Password
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              {email !== null && (
                <Link to="/doubt" style={{ textDecoration: 'none' }}>
                  Doubt
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              {email !== null && (
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  About Us
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
