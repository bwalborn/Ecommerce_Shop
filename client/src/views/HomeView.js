import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeView = () => {
  const [Products, setProducts] = useState([]);
  
useEffect(() => {
  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products');

    setProducts(data);
  }

  fetchProducts();
}, []) // <= array of dependencies (anything that you want useEffect to fire off then they change)


  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {Products.map(product => {
                return (
                <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
                )
            })}
        </Row>
    </>
  );
}

export default HomeView;