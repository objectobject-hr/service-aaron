import React from 'react';
// import { PromiseProvider } from 'mongoose';
import ProductListEntry from './ProductListEntry.jsx';

const ProductList = (props) => {
  console.log(typeof props.products)
  console.log(props.products)
  console.log(props.products[0])
  return(
    <div>
      {console.log(`keys: `, Object.keys(props.products))}
      {/* {for (var props in props.products)} */}
      {/* {Object.keys(props.products).map((item, index) => (
        <ProductListEntry product={item} key={index} index={index} />
      ))} */}
    </div>

  )
}

export default ProductList;