import React from 'react';
import styled from 'styled-components';
import FullStar from './FullStar.jsx';
import HalfStar from './HalfStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const StyledItem = styled.div`
  padding: 20px;
  transition: transform .2s; /* Animation */
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    .productimage {
      transform: scale(1.06);
    }
  }
  &:hover {
    .productname {
      text-decoration: underline;
    }
  }
`;

const StyledProductName = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 550;
`;

const StyledDescription = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
`;

const StyledPrice = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 26px;
  font-weight: 700;
`;

const Span = styled.span`
  display: flex;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
`;

const round = (x, precision) => {
  var y = +x + (precision === undefined ? 0.5 : precision/2);
  return y - (y % (precision === undefined ? 1 : +precision));
}

const ratingHandler = (unroundedRate) => {
  var rating = round(unroundedRate, 0.5);
  // console.log(rating)

  var starArray = [];
  var counter = 0;
  while (counter < 5) {
      if (rating - 1 >= 0) {
        starArray.push(<FullStar/>)
        rating--
      } else if (rating === 0.5) {
        starArray.push(<HalfStar/>)
        rating -= 0.5
      } else if (rating === 0) {
        starArray.push(<EmptyStar/>)
      }
      // console.log(counter)
      counter++
  }
  return starArray
}

const ProductListEntry = (props) => {
  // console.log(props.product.itemimage)
  return (
      <StyledItem>
        <img src={props.product.itemimage} className="productimage" height="175" width="175"/>
        <StyledProductName className="productname">{props.product.itemname}</StyledProductName>
        <StyledDescription>{props.product.description}</StyledDescription>
        <StyledDescription>{props.product.typesize}</StyledDescription>
        <StyledPrice>${props.product.price}</StyledPrice>
        <Span>{ratingHandler(props.product.rating)} &nbsp; {props.product.rating} </Span>
      </StyledItem>
  )
}

export default ProductListEntry;