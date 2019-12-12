import React from 'react';
import styled from 'styled-components';

const ShowAllHistoryEntry = (props) => {
  return (
    <div className="as-styledHistoryEntry">
      <img src={props.product.itemimage} className="as-styledHistoryProductImage" height="70" width="70"/>
    </div>
  )
}

export default ShowAllHistoryEntry;