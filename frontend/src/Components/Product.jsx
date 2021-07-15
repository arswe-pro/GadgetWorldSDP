import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
    const { _id, name, image, rating, numReviews, price } = product;

    return (
        <Card className='my-3 shadow-sm  rounded-3'>
            <Link to={`/product/${_id}`}>
                <Card.Img src={image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${_id}`}>
                    <Card.Title as='div'>
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <strong>
                        <Rating value={rating} text={` ${numReviews} Reviews`} />
                    </strong>
                </Card.Text>

                <Card.Text as='h4'>${price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
