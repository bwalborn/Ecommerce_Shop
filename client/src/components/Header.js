import React from 'react';
// bring anything in from state useSelector. Call an action -> useDispatch
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            {/* <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect style={{height : '70px'}}> */}
            <Navbar bg="light"  expand="lg" collapseOnSelect style={{height : '70px', color: 'light-gray'}}>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand >EcommerceShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link>
                            <i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                    </LinkContainer>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) :
                    <LinkContainer to='/login'>
                        <Nav.Link>
                            <i className='fas fa-user'></i>Sign In</Nav.Link>
                    </LinkContainer>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>    
        </header>
    );
}

export default Header;