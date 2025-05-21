"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="mt-5 text-center">
      <h1>Welcome to My Next.js App with React-Bootstrap</h1>
      <p>This is the Home Page using the App Router structure.</p>
      <Button href="/Users" variant="primary">
        Go to Users Page
      </Button>
    </Container>
  );
}
