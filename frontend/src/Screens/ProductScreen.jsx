import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import Meta from '../Components/Meta';
import Rating from '../Components/Rating';
import { createProductReview, listProductDetails } from '../Redux/actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../Redux/constants/productConstants';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const { success: successProductReview, loading: loadingProductReview, error: errorProductReview } = productReviewCreate;

    useEffect(() => {
        if (successProductReview) {
            setRating(0);
            setComment('');
        }
        if (!product._id || product._id !== match.params.id) {
            dispatch(listProductDetails(match.params.id));
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }
    }, [dispatch, match, successProductReview, product._id]);

    const addToCartHandler = () => {
        history.push(`/Cart/${match.params.id}?qty=${qty}`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            })
        );
    };

    return (
        <>
            <Link to='/'>
                <Button variant='outline-danger' className='my-1'>
                    GO BACK
                </Button>
            </Link>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'> {error} </Message>
            ) : (
                <>
                    <Meta title={product.name} />
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid thumbnail className=' rounded-3' />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h4>{product.name}</h4>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>
                                        <Rating value={product.rating} text={` ${product.numReviews}  Reviews`} />
                                    </strong>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Price: ${product.price}</strong>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong> Description: {product.description}</strong>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                <strong>Price:</strong>
                                            </Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                <strong>Status: </strong>
                                            </Col>
                                            <Col>
                                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    <strong>Quantity:</strong>
                                                </Col>
                                                <Col>
                                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                        {[...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item>
                                        <Button
                                            onClick={addToCartHandler}
                                            type='button'
                                            variant='danger'
                                            disabled={product.countInStock === 0}
                                            style={{ width: '100%' }}
                                        >
                                            <i className='fa fa-shopping-cart'></i> Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='my-5'>
                        <Col md={6}>
                            <h4>Reviews</h4>
                            {product.reviews.length === 0 && <Message>No Reviews</Message>}
                            <ListGroup variant='flush'>
                                {product.reviews.map((review) => (
                                    <ListGroup.Item key={review._id}>
                                        <h5>{review.name}</h5>
                                        <Rating value={review.rating} />
                                        <p>{review.createdAt.substring(0, 10)}</p>

                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col md={6}>
                            <h4>Write a Customer Review</h4>

                            {successProductReview && <Message variant='success'>Review submitted successfully</Message>}
                            {loadingProductReview && <Loader />}
                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                            {userInfo ? (
                                <Form onSubmit={submitHandler} className='px-4 py-4 text-light bg-danger'>
                                    <Form.Group controlId='rating' className='mb-3'>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                            <option value=''>Select...</option>
                                            <option value='1'>1 - Poor</option>
                                            <option value='2'>2 - Fair</option>
                                            <option value='3'>3 - Good</option>
                                            <option value='4'>4 - Very Good</option>
                                            <option value='5'>5 - Excellent</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='comment' className='mb-3'>
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={2}
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <Button disabled={loadingProductReview} type='submit' variant='outline-light' style={{ width: '100%' }}>
                                        Submit
                                    </Button>
                                </Form>
                            ) : (
                                <Message>
                                    Please <Link to='/login'>sign in</Link> to write a review{' '}
                                </Message>
                            )}
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default ProductScreen;
