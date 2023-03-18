import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
  const navigate = useNavigate();

  const BuyNowHandler = () => {
    navigate('/cart');
  };

  return (
    <Card className='border-0 shadow-none rounded-0 text-center p-2' id='BestDealsCard'>
      <Card.Body>
        <div className='product-img p-2'>
          <img id='ProductImg' alt='ProductImg' src={product?.image} />
        </div>
        <h6 className='p-2 m-2' id='ProductTitle'>
          {product?.title}
        </h6>
        <p className=' mt-2'>
          <span id='ProductCategory' className='rounded-0 mb-2 badge bg-dark'>
            {product?.category.toUpperCase()}
          </span>
        </p>
        <p className=' m-2' id='ProductPrice'>
          Price : ₹{product?.price}| <s>₹128</s>
        </p>
      </Card.Body>
      <Button className='p-2 m-2 rounded-0 text-center shadow-sm btn btn-dark'>ADD TO CART</Button>
      <Button className='p-2 m-2 rounded-0 text-center shadow-sm btn btn-warning' onClick={BuyNowHandler}>
        BUY NOW
      </Button>
    </Card>
  );
};

export default Product;
