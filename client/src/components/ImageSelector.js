// import React from 'react';

// const ImageSelector = () => {

//     // const handleImageSelector = (e) => {
//     //     e.preventDefault();

//     // }

//     return (
//         <>
//         {/* <Image src={product.image} alt={product.name} style={{margin: '1rem'}} fluid /> */}
//             <Row md={4}>
//                 {product.images.map(image => (
//                     <Image src={product.image} alt={product.name} style={{margin: '1rem'}} fluid />
//                     ))}
//             </Row>
//         </>
//     )
// }

// export default ImageSelector;



import React, { useState} from 'react'
import { Row, Image} from 'react-bootstrap';
//Col


const ImageSelector = (props) => {

    const ImageArray = props.images.length > 1 ? props.images[0] : props.images;

    const [selectImage, setSelectImage] = useState(ImageArray);

        const handleclick = (image) => {
           setSelectImage();
           setSelectImage(image);
        }
    

    return (
        <>
            <Image src={selectImage} fluid />  
                <Row md={4} style={{alignItems: 'center'}}>
                    {props.images.map((image, indx) => (
                            <Image src={image} index={indx} style={{margin: '1rem'}} fluid onClick={()=> handleclick(image)} />
                        ))}
                </Row>
        </>
    )}

    export default ImageSelector;



    