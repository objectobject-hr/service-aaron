import React from 'react';
import styled from 'styled-components';

const StyledLikeItem = styled.div`
  padding: 20px;
  transition: transform .2s; /* Animation */
  margin: 0 auto;
  &:hover {
    .productimage {
      transform: scale(1.06);
    }
  }
`;

const StyledLikeName = styled.div`
  font-family: sans-serif;
  font-weight: 550;
`;

const StyledLikeDescription = styled.div`
  font-family: sans-serif;
  font-size: 14px;
`;

const StyledLikePrice = styled.div`
  font-family: sans-serif;
  font-size: 26px;
  font-weight: 700;
`;

const MightLikeProductListEntry = (props) => {
  // console.log(props.MightLikeProduct.itemimage)
  return (
      <StyledLikeItem>
        <img src={props.MightLikeProduct.itemimage} className="productimage" height="175" width="175"/>
        <StyledLikeName>{props.MightLikeProduct.itemname}</StyledLikeName>
        <StyledLikeDescription>{props.MightLikeProduct.description}</StyledLikeDescription>
        <StyledLikeDescription>{props.MightLikeProduct.typesize}</StyledLikeDescription>
        <StyledLikePrice>{props.MightLikeProduct.price}</StyledLikePrice>
      </StyledLikeItem>
  )
}

export default MightLikeProductListEntry;