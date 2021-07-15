import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import Meta from '../Components/Meta';
import Paginate from '../Components/Paginate';
import Product from '../Components/Product';
import ProductCarousel from '../Components/ProductCarousel';
import { listProducts } from '../Redux/actions/productActions';

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);

    return (
        <>
            <Meta />
            {!keyword ? (
                <ProductCarousel />
            ) : (
                <Link to='/' className='btn btn-outline-danger'>
                    Go Back
                </Link>
            )}
            <h4 className='mt-3'> Latest feature </h4>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} xs={12} sm={6} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                </>
            )}
        </>
    );
};

export default HomeScreen;
