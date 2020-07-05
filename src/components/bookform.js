import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'
const BookForm = () => {
    return (
        <div className="m-3">
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" placeholder="Book Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Auth" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="dark" type="submit">
                    Add book
  </Button>
            </Form>
        </div>
    );
}


export default BookForm;