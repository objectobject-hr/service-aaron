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

const Title = styled.h1`
  text-align: center;
  margin-top: 1em;
  font-family: 'Noto Sans', sans-serif;
  z-index: -999;
`;

const Title2 = styled.h1`
  text-align: center;
  margin-top: 16em;
  font-family: 'Noto Sans', sans-serif;
  z-index: -999;
`;

const SecondCarousel = styled.div`
  position: absolute;
  margin-top: 0.5em;
`;

const History = styled.div`
  position: relative;
  margin-top: 29em;
`;

const StyledFooter = styled.div`
  position: absolute;
  top: 75em;
  height: 600px;
  width: 100%;
  background-color: #0058a3;
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
          <Title>
            Similar Products
          </Title>

          <SimilarProducts />

          <Title2>
            You Might Also Like
          </Title2>

          <SecondCarousel>
            <YouMightAlsoLike />

          </SecondCarousel>

          <History>
            <ShowAllHistory />
          </History>
          
          <StyledFooter>
            <Footer></Footer>
          </StyledFooter>
        </div>
      );

    }
    
  }
}

export default App;
