import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
// import axios from 'axios';

const HomeView = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

useEffect(() => {
  dispatch(listProducts())
}, [dispatch]) // <= array of dependencies (anything that you want useEffect to fire off then they change)


  return (
    <>
        <h1>Latest Products</h1>
        {loading ?  <h2>Loading...</h2> : error ? <h3>{error}</h3> : 
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