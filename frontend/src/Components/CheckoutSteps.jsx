import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-5'>
            <Nav.Item>
                {step1 ? (
                    <Nav.Link as={Link} to='/Login'>
                        <strong> Sign In </strong>
                    </Nav.Link>
                ) : (
                    <Nav.Link disabled>
                        <strong>Sign In</strong>
                    </Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <Nav.Link as={Link} to='/Shipping'>
                        <strong>Shipping</strong>
                    </Nav.Link>
                ) : (
                    <Nav.Link disabled>
                        <strong>Shipping</strong>
                    </Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <Nav.Link as={Link} to='/Payments'>
                        <strong>Payment</strong>
                    </Nav.Link>
                ) : (
                    <Nav.Link disabled>
                        <strong>Payment</strong>
                    </Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <Nav.Link as={Link} to='/PlaceOrder'>
                        <strong> Place Order </strong>
                    </Nav.Link>
                ) : (
                    <Nav.Link disabled>
                        <strong>Place Order</strong>
                    </Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    );
};

export default CheckoutSteps;
