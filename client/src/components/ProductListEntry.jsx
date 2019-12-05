import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  padding: 20px;
`;

const StyledProductName = styled.div`
  font-family: sans-serif;
  font-weight: 550;
`;

const StyledDescription = styled.div`
  font-family: sans-serif;
  font-size: 14px;
`;

const StyledPrice = styled.div`
  font-family: sans-serif;
  font-size: 26px;
  font-weight: 700;
`;

const ProductListEntry = (props) => {
  console.log(props.product.itemimage)
  return (
      <StyledItem>
        <img src={props.product.itemimage} className="productimage" height="175" width="175"/>
        <StyledProductName>{props.product.itemname}</StyledProductName>
        <StyledDescription>{props.product.description}</StyledDescription>
        <StyledDescription>{props.product.typesize}</StyledDescription>
        <StyledPrice>{props.product.price}</StyledPrice>
      </StyledItem>
  )
}

export default ProductListEntry;