import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import SimilarProducts from './SimilarProducts.jsx';
import YouMightAlsoLike from './YouMightAlsoLike.jsx';
import testData from '../data/testData.js';
import data from '../data/data.js'
import ShowAllHistory from '../components/ShowAllHistory.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allProducts: testData.products,
      shownProducts: []
    }

  }

  getAll() {
    axios.get('/products')
      // .then((response) => console.log(response.data))
      // .then((response) => {
      //   this.setState({
      //     allProducts: response.data,
      //   })
      // })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    // this.getAll();
    // console.log(`actual allProducts: `, this.state.allProducts)
  }

  render() {
    // console.log(this.state.allProducts)
    if (this.state.allProducts.length < 1 || this.state.allProducts === undefined) {
      return <div>loading...</div>
    } else {
      return (
        <div className="as-everythingContainer">
          <div className="as-title">
            Similar Products
          </div>

          <SimilarProducts />

          <div className="as-title" style={{
            textAlign: 'center',
            // marginTop: '5em',
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: 30,
            fontWeight: 700,
            zIndex: -999
            // backgroundColor: "red"
          }}>
            You Might Also Like
          </div>

          {/* <div className="as-youMightAlsoLikeDIV"> */}
          <YouMightAlsoLike />
          {/* </div> */}

          <div className="as-showAllHistory">
            <ShowAllHistory />
          </div>
          
          <div className="as-footer" style={{
              // position: 'absolute',
              // margin: '-7px',
              // top: '75.5em',
              height: '600px',
              width: '100%',
              backgroundColor: '#0058a3'
          }}>
            <Footer></Footer>
          </div>
        </div>
      );

    }
    
  }
}

export default App;
