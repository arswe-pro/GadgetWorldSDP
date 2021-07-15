import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={10} md={8} lg={6} xl={5} className='px-4 py-3 text-light bg-danger'>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;
