import React, { useEffect } from 'react';
import { Carousel, Col, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listTopProducts } from '../Redux/actions/productActions';
import Loader from './Loader';
import Message from './Message';

const ProductCarousel = () => {
    const dispatch = useDispatch();

    const productTopRated = useSelector((state) => state.productTopRated);
    const { loading, error, products } = productTopRated;

    useEffect(() => {
        dispatch(listTopProducts());
    }, [dispatch]);
    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'> {error} </Message>
            ) : (
                <Carousel pause='hover' className='bg-danger'>
                    {products.map((product) => (
                        <Carousel.Item interval={2000} key={product._id}>
                            <Row>
                                <Col>
                                    <Carousel.Caption>
                                        <h3>
                                            <Link to={`/product/${product._id}`}>
                                                {product.name} (${product.price})
                                            </Link>
                                        </h3>
                                    </Carousel.Caption>
                                </Col>
                                <Col>
                                    <Link to={`/product/${product._id}`}>
                                        <Image fluid src={product.image} alt={product.name} />
                                    </Link>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    );
};

export default ProductCarousel;
