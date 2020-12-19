import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Products from '../products';

const HomeView = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {Products.map(product => {
                return (
                <Col sm={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
                )
            })}
        </Row>
    </>
  );
}

export default HomeView;

{/* <h3>{product.name}</h3> */}
