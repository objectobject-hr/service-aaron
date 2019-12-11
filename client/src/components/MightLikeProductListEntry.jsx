import React from 'react';
import styled from 'styled-components';
import FullStar from './FullStar.jsx';
import HalfStar from './HalfStar.jsx';
import EmptyStar from './EmptyStar.jsx';

const StyledLikeItem = styled.div`
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

const StyledLikeName = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 550;
`;

const StyledLikeDescription = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
`;

const StyledLikePrice = styled.div`
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

const MightLikeProductListEntry = (props) => {
  // console.log(props.MightLikeProduct.itemimage)
  return (
    <StyledLikeItem >
      <img src={props.MightLikeProduct.itemimage} className="productimage" height="175" width="175"/>
      <StyledLikeName className="productname">{props.MightLikeProduct.itemname}</StyledLikeName>
      <StyledLikeDescription>{props.MightLikeProduct.description}</StyledLikeDescription>
      <StyledLikeDescription>{props.MightLikeProduct.typesize}</StyledLikeDescription>
      <StyledLikePrice>{props.MightLikeProduct.price}</StyledLikePrice>
      <Span>{ratingHandler(props.MightLikeProduct.rating)} &nbsp; {props.MightLikeProduct.rating} </Span>
    </StyledLikeItem>
  )
}

export default MightLikeProductListEntry;