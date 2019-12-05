import React from 'react';
import ProductListEntry from './ProductListEntry.jsx';
import styled from 'styled-components';


let StyledProducts = styled.div`
  display: flex;
  margin: 0 px;
`;

const ProductList = (props) => {
  console.log(typeof props.allProducts)
  console.log(props.allProducts)
  console.log(props.allProducts[0])

  if (props.allProducts[0] === undefined) {
    return null
  } else {
    return (

      <StyledProducts>
        {props.allProducts.map((item, index) => (
          <ProductListEntry product={item} key={index} index={index} />
        ))}
      </StyledProducts>
  
    )

  }
}

export default ProductList;