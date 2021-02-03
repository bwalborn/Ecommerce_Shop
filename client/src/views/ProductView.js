import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ImageSelector from '../components/ImageSelector';
import { listProductDetails } from '../actions/productActions';



const ProductView = ({ history, match }) => {
    // const product = Products.find(p => p._id === match.params.id)
    // const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1); // initial qty amount = 1

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        // const fetchProduct = async () => {
        //   const { data } = await axios.get(`/api/products/${match.params.id}`);
        //   setProduct(data); }
        // fetchProduct();

        dispatch(listProductDetails(match.params.id))
      }, [dispatch, match])

      const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
      }


    //   const imageSelector = () => {
    //       const mainImg = e.target.value
    //       return (
    //         <>
    //             <Image src={product.image} alt={product.name} fluid />
    //             <HandleImageSelector onClick={(e) => product.images} />
    //         </>
    //       );
    //   }


    //   const HandleImageSelector = (e) => ({array}) => {
    //     // e.preventDefault();
    //     const selectImage = e.target.value ? e.target.value : product.images[0];
    //     array.indexOf()
    //     return (
    //         <>
    //         {/* <Image src={selectImage} alt={product.name} style={{margin: '1rem'}} fluid /> */}
    //             <Row md={4}>
    //                 {array.images.map(image => (
    //                     <Image src={image} alt={array.name} style={{margin: '1rem'}} fluid />
    //                     ))}
    //             </Row>
    //         </>
    //     )}

  return (
   <>
   <Link className='btn btn-light my-3' to='/'>
       Go Back
   </Link>
   {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
   <Row>
       <Col md={6}>
           {}
            <Image src={product.image} alt={product.name} fluid />
            {/* <Col md={4} style={{margin: '1rem 0'}} ><Image src={product.image} alt={product.name} fluid /></Col> */}
            {/* THIS WILL TAKE IN AN ARRAY OF IMAGES AS A PROP -> HAVE AN ONSELECT OPTION WHICH WILL DETERMINE THE LAYOUT 
             -> NEED TO UPDATE THE MODEL FIRST!*/}

            {/* <ImageSelector images={product.image} /> */}
            {/* <Row md={4} style={{alignItems: 'center'}}><Image src={product.image} alt={product.name} style={{margin: '1em'}} fluid /><Image src={product.image} alt={product.name} style={{margin: '1em'}} fluid /><Image src={product.image} alt={product.name} style={{margin: '1em'}} fluid /></Row> */}
            


       </Col>
       <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
       </Col>
       <Col md={3}>
           <Card>
               <ListGroup variant='flush'>
                   <ListGroup.Item>
                       <Row>
                           <Col>
                                Price:
                           </Col>
                           <Col>
                                <strong>${product.price}</strong>
                           </Col>
                       </Row>
                   </ListGroup.Item>

                   <ListGroup.Item>
                       <Row>
                           <Col>
                                Status:
                           </Col>
                           <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                           </Col>
                       </Row>
                   </ListGroup.Item>
                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map( x => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                   <ListGroup.Item>
                       <Button onClick={addToCartHandler}
                       className='btn-block' type='button' 
                       disabled={product.countInStock === 0}>
                           Add To Cart
                       </Button>
                   </ListGroup.Item>
               </ListGroup>
           </Card>
       </Col>
   </Row>
   )}
   </>
  );
}

export default ProductView;