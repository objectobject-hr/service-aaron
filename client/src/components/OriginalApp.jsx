import React from 'react';
import axios from 'axios';
import ProductList from './ProductList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {}
    }

  }

  getAll() {
    axios.get('/products')
      // .then((response) => console.log(response.data)) // object, not array
      .then((response) => {
        this.setState({
          products: response.data
        })
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    return(
      <div className="IKEA PRODUCTS"> IKEA YPPERLIG TABLE
        <ProductList products={this.state.products} />
      </div>
    )
  }
}

export default App;