import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { logout } from '../Redux/actions/userActions';
import SearchBox from './SearchBox';

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;

    const logoutHandle = () => {
        dispatch(logout());
    };

    /* <i class="fab fa-staylinked"></i> */

    return (
        <div>
            <Navbar collapseOnSelect expand='md' bg='danger' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <i className='fab fa-staylinked'></i> gadget world sdp
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Route render={({ history }) => <SearchBox history={history} />} />

                        <Nav className='mr-auto'>
                            <Nav.Link as={Link} to='/Cart'>
                                <i className='fas fa-shopping-cart'></i> Cart
                            </Nav.Link>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='collasible-nav-dropdown'>
                                    <NavDropdown.Item as={Link} to='/Profile'>
                                        <i className='fa fa-user'></i> Profile
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logoutHandle}>
                                        <i className='fas fa-sign-out-alt'> </i> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link as={Link} to='/Login'>
                                    <i className='fa fa-user'> </i> Sign In
                                </Nav.Link>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title={userInfo.name} id='collasible-nav-dropdown'>
                                    <NavDropdown.Item as={Link} to='/admin/UserList'>
                                        <i className='fa fa-user'></i> Users
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/admin/ProductList'>
                                        <i className='fab fa-product-hunt'></i> Product List
                                    </NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to='/admin/OrderList'>
                                        <i className='fab fa-first-order-alt'></i> Order List
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
