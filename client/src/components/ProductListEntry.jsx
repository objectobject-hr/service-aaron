import React from 'react';
import { PromiseProvider } from 'mongoose';

const ProductListEntry = (props) => {
  console.log(props)
  return (
  <div className="productlistentry">
    <div className="productname">{props.product.itemname}</div>
  </div>
  )
}

export default ProductListEntry;