'use client';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
export default function Login() {
    return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit">Login</Button>
      </Form>
    </Container>
  );
}
