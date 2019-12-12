import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SimilarProducts from './SimilarProducts.jsx';
import YouMightAlsoLike from './YouMightAlsoLike.jsx';
import testData from '../data/testData.js';
import data from '../data/data.js'
import ShowAllHistory from '../components/ShowAllHistory.jsx';
import Footer from './Footer.jsx';


const Page = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const StyledFooter = styled.div`

`;

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
      .then((response) => console.log(response.data))
      // .then((response) => {
      //   this.setState({
      //     allProducts: response.data,
      //   })
      // })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    // this.getAll();
    console.log(`actual allProducts: `, this.state.allProducts)
  }

  render() {
    console.log(this.state.allProducts)
    if (this.state.allProducts.length < 1 || this.state.allProducts === undefined) {
      return <div>loading...</div>
    } else {
      return (
        <div>
          <h1 className="as-title" style={{
            textAlign: 'center',
            marginTop: '1em',
            fontFamily: 'Noto Sans, sans-serif',
            zIndex: -999
          }}>
            Similar Products
          </h1>

          <SimilarProducts />

          <h1 className="as-mightAlsoLike" style={{
            textAlign: 'center',
            marginTop: '16em',
            fontFamily: 'Noto Sans, sans-serif',
            zIndex: -999
          }}>
            You Might Also Like
          </h1>

          <div className="as-secondCarousel" style={{
              position: 'absolute',
              marginTop: '0.5em'
          }}>
            <YouMightAlsoLike />
          </div>

          <div className="as-showAllHistory" style={{
              position: 'relative',
              marginTop: '29em'
          }}>
            <ShowAllHistory />
          </div>
          
          <div className="as-footer" style={{
              position: 'absolute',
              margin: '-7px',
              top: '75.5em',
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
