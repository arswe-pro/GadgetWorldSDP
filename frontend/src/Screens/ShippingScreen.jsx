import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../Components/CheckoutSteps';
import FormContainer from '../Components/FormContainer';
import { saveShippingAddress } from '../Redux/actions/cartActions';

const ShippingScreen = ({ history }) => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        history.push('/Payments');
    };
    return (
        <>
            <CheckoutSteps step1 step2 />
            <FormContainer>
                <h3 className='text-light'>Shipping</h3>

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='address' className='mb-3'>
                        <Form.Label>
                            <strong>Address</strong>
                        </Form.Label>
                        <Form.Control type='test' placeholder='Address ' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId='city' className='mb-3'>
                        <Form.Label>
                            <strong>City</strong>
                        </Form.Label>
                        <Form.Control type='test' placeholder='City ' value={city} onChange={(e) => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId='postalCode' className='mb-3'>
                        <Form.Label>
                            <strong>Postal Code</strong>
                        </Form.Label>
                        <Form.Control type='number' placeholder='Postal Code ' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId='country' className='mb-3'>
                        <Form.Label>
                            <strong>Country</strong>
                        </Form.Label>
                        <Form.Control type='test' placeholder='Country ' value={country} onChange={(e) => setCountry(e.target.value)} />
                    </Form.Group>

                    <Button type='submit' variant='outline-light' style={{ width: '100%' }}>
                        Continue
                    </Button>
                </Form>
            </FormContainer>
        </>
    );
};

export default ShippingScreen;
