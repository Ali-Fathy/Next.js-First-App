// components/ClientNavbar.js
"use client";

import { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function ClientNavbar() {
  useEffect(() => {
    // Optional safety check
    typeof document !== "undefined" && console.log("Navbar ready");
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/" className="navbar-brand">
            Users App
          </Link>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/About" className="nav-link">
                About
              </Link>
              <Link href="/ContactUs" className="nav-link">
                Contact
              </Link>
              <Link href="/Users" className="nav-link">
                Users
              </Link>
              <Link href="/Login" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
