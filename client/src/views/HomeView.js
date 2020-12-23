import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
// import axios from 'axios';

const HomeView = () => {
  const dispatch = useDispatch();


  // second #2 -> selecting components from the global state
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  // first #1  hooks -> fire off the action to get the products and send through the reducer down into the state.
useEffect(() => {
  dispatch(listProducts())
}, [dispatch]) // <= array of dependencies (anything that you want useEffect to fire off then they change)



// third #3 -> display elements form the state below
  return (
    <>
        <h1>Latest Products</h1>
        {loading ?  <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
        <Row>
            {products.map(product => {
                return (
                <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
                )
            })}
        </Row>}
    </>
  );
}

export default HomeView;