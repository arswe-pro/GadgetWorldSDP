import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    };
    return (
        <Form className='d-flex mx-auto' onSubmit={submitHandler}>
            <FormControl
                type='search'
                placeholder='Search'
                name='q'
                className='mr-2 bg-danger text-light border'
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button type='submit' variant='outline-light'>
                <i className='fas fa-search'></i>
            </Button>
        </Form>
    );
};

export default SearchBox;
