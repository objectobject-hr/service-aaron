import React from 'react';
import styled from 'styled-components';

let StyledItem = styled.div`
  padding: 20px;
`

const ProductListEntry = (props) => {
  console.log(props.product.itemimage)
  return (
      <StyledItem>
        <img src={props.product.itemimage} className="productimage" height="175" width="175"/>
        <div className="productname">{props.product.itemname}</div>
        <div className="producttypesize">{props.product.typesize}</div>
        <div className="productname">{props.product.price}</div>
        <div className="productname">{props.product.description}</div>
      </StyledItem>
  )
}

export default ProductListEntry;