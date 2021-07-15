import React from 'react';
import { Nav } from 'react-bootstrap';

const TopBar = () => {
    return (
        <Nav justify variant='tabs' className='bg-danger text-light'>
            <Nav.Item>
                <Nav.Link className='text-light' disabled>
                    <i className='fa fa-phone'></i> 01718279992
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='text-light' disabled>
                    <strong>
                        <i className='fas fa-envelope'></i> arafatnoby2799@gmail.com
                    </strong>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='text-light' disabled>
                    <i className='fas fa-street-view'></i> Saidpur, Nilphamari
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default TopBar;
