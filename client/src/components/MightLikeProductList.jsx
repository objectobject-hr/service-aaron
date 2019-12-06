import React from 'react';
import MightLikeProductListEntry from './MightLikeProductListEntry.jsx';
import styled from 'styled-components';


let StyledLikeProducts = styled.div`
  display: flex;
  margin: 0 px;
`;


const MightLikeProductList = (props) => {
  // console.log(typeof props.allLikedProducts)
  // console.log(props.allLikedProducts)
  console.log(props.allLikedProducts[0])

  if (props.allLikedProducts[0] === undefined) {
    return null
  } else {
    return (
      
      <StyledLikeProducts>
        {props.allLikedProducts.map((item, index) => (
          <MightLikeProductListEntry MightLikeProduct={item} key={index} index={index} />
        ))}
      </StyledLikeProducts>
  
    )

  }
}

export default MightLikeProductList;