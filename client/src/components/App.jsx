import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList.jsx';
import axios from 'axios';
import data from '../data/data.js';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';


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
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allProducts: [],
      shownProducts: [],
      currentIndex: 0,
      translateValue: 0
    }

    this.previousView = this.previousView.bind(this);
    this.nextView = this.nextView.bind(this);
  }

  getAll() {
    axios.get('/products')
      // .then((response) => console.log(response.data))
      .then((response) => {
        this.setState({
          allProducts: response.data,
          // shownProducts: response.data.splice(0,4)
        })
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getAll();
  }

  previousView() {
    console.log(`clicked`)
    // if(this.state.currentIndex === this.state.allProducts.length - 1) {
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue - -(this.slideWidth())
    }));
  }

  nextView() {
    console.log(`clicked`)
    // if(this.state.currentIndex === this.state.allProducts.length - 1) {
    if(this.state.currentIndex === 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));

  }

  slideWidth() {
    return document.querySelector('.carousel').clientWidth;
  }

  render() {
    console.log(this.state.allProducts)
    if (this.state.allProducts.length < 1 || this.state.allProducts === undefined) {
      return <div>loading...</div>
    } else {
      return (
        <div>IKEA FRONT END CAPSTONE
          <div className="carousel"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>

            <ProductList allProducts={this.state.allProducts} />
            
            {/* {
              this.state.allProducts.map((item, index) => {
                <Carousel key={index} product={item} />
  
              })
            } */}
  
          </div>
          <LeftArrow
            previousView={this.previousView}
          />
          <RightArrow
            nextView={this.nextView}
          />
        </div>
      );

    }
    
  }
}

export default App;
