"use client";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Users</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <Card>
              <Card.Img
                variant="top"
                src={user.image}
                alt={`${user.firstName}'s photo`}
              />
              <Card.Body>
                <Card.Title>
                  {user.firstName} {user.lastName}
                </Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                  <br />
                  <strong>Phone:</strong> {user.phone}
                  <br />
                  <strong>Age:</strong> {user.age}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
