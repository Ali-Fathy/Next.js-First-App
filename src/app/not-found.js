import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="mt-5 text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Container>
  );
}
