import React from 'react';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-danger border-top  text-light'>
            <Container>
                <Row className='py-4'>
                    <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                        <h3 className='text-light mb-3'>
                            <i className='fab fa-staylinked'></i> Gadget World SDP
                        </h3>

                        <p>
                            <i className='fas fa-headset'></i> Got Questions ? Call us 24/7 !
                        </p>

                        <p>
                            <i className='fa fa-phone'></i> 01718279992
                        </p>

                        <p>
                            <i className='fas fa-envelope'></i> arafatnoby2799@gmail.com
                        </p>

                        <p>
                            <i className='fas fa-street-view'></i> Saidpur, Nilphamari
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={4}>
                        <h4 className='text-light mb-3'>
                            <i className='fas fa-link'></i> Important
                        </h4>
                        <Nav className='flex-column'>
                            <Nav.Link className='text-light' as={Link} to='/termsCondition'>
                                Terms & condition
                            </Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/Report'>
                                Privacy Policy
                            </Nav.Link>

                            <Nav.Link className='text-light' as={Link} to='/productSupport'>
                                Product Support
                            </Nav.Link>
                            <Nav.Link className='text-light' as={Link} to='/FAQ'>
                                FAQ
                            </Nav.Link>
                        </Nav>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                        <h4 className='text-light mb-3'>
                            <i className='fas fa-mail-bulk'></i> Contact
                        </h4>
                        <Form>
                            <Form.Group className='mb-2' controlId='email@example.com'>
                                <Form.Control type='email' placeholder='yourEmail@example.com' className='bg-danger text-light border' />
                            </Form.Group>
                            <Form.Group className='mb-2' controlId='Comment'>
                                <Form.Control as='textarea' rows={2} placeholder='Your Comment' className='bg-danger text-light border' />
                            </Form.Group>
                            <Button type='submit' variant='outline-light' style={{ width: '100%' }}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container className='py-2 border-top'>
                <p className='text-light'>
                    <i className='fab fa-staylinked'></i> <strong> Gadget World SDP &copy; 2021-2022 All Rights Reserved.</strong>
                </p>
                <h6 className='text-light'>
                    <i className='fab fa-envira'></i> Design & Development by <i className='fas fa-heart'></i> Abdur Rahman Akaid
                </h6>
            </Container>
        </div>
    );
};

export default Footer;
