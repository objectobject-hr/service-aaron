import React from 'react';
import styled from 'styled-components';

const StyledEntry = styled.div`
  padding: 15px;
  transition: transform .2s; /* Animation */
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    .productimage {
      transform: scale(1.06);
    }
  }
`;

const ShowAllHistoryEntry = (props) => {
  return (
    <StyledEntry>
      <img src={props.product.itemimage} className="productimage" height="70" width="70"/>
    </StyledEntry>
  )
}

export default ShowAllHistoryEntry;