import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../Components/CheckoutSteps';
import FormContainer from '../Components/FormContainer';
import { savePaymentMethod } from '../Redux/actions/cartActions';

const PaymentScreen = ({ history }) => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.push('/Shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/PlaceOrder');
    };
    return (
        <>
            <CheckoutSteps step1 step2 step3 />
            <FormContainer>
                <h3 className='text-light'>Payment Method</h3>

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='address' className='mb-3'>
                        <Form.Label as='legend'>
                            <h5 className='text-light'>Select Method</h5>
                        </Form.Label>
                        <Col>
                            <Form.Check
                                type='radio'
                                label='PayPal Or Credit Card'
                                id='PayPal'
                                name='paymentMethod'
                                value='PayPal'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />

                            {/* <Form.Check
                            type='radio'
                            label='Stripe'
                            id='Stripe'
                            name='paymentMethod'
                            value='Stripe'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        /> */}
                        </Col>
                    </Form.Group>

                    <Button type='submit' variant='outline-light' style={{ width: '100%' }}>
                        Continue
                    </Button>
                </Form>
            </FormContainer>
        </>
    );
};

export default PaymentScreen;
