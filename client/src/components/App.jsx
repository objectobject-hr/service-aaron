import React from "react";
// import styled from 'styled-components';
import axios from "axios";
import SimilarProducts from "./SimilarProducts.jsx";
import YouMightAlsoLike from "./YouMightAlsoLike.jsx";
import testData from "../data/testData.js";
import data from "../data/data.js";
import ShowAllHistory from "../components/ShowAllHistory.jsx";
import Footer from "./Footer.jsx";
import Modal from "./Modal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onLoadProducts: [],
      shownProducts: [],
      modalState: true
    };

    this.getAll = this.getAll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalState: !this.state.modalState
    });
  }

  // onClose(e) {
  //   this.setState({
  //     modalState: false
  //   });
  // }

  getAll() {
    axios
      .get("/products")
      // .then((response) => console.log(response.data))
      .then(response => {
        this.setState({
          onLoadProducts: response.data
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAll();
    // console.log(`actual onLoadProducts: `, this.state.onLoadProducts)
  }

  render() {
    // console.log(this.state.onLoadProducts)
    if (
      this.state.onLoadProducts.length < 1 ||
      this.state.onLoadProducts === undefined
    ) {
      return <div>loading...</div>;
    } else {
      return (
        <div className="as-everythingContainer">
          <div className="as-title">Similar Products</div>

          <SimilarProducts />

          <div
            className="as-title"
            style={{
              textAlign: "center",
              // marginTop: '5em',
              fontFamily: "Noto Sans, sans-serif",
              fontSize: "30px",
              fontWeight: 700,
              zIndex: -999
              // backgroundColor: "red"
            }}
          >
            You Might Also Like
          </div>

          {/* <div className="as-youMightAlsoLikeDIV"> */}
          <YouMightAlsoLike />
          {/* </div> */}

          <div className="as-showAllHistory">
            <ShowAllHistory />
          </div>

          <div
            className="as-footer"
            style={{
              // position: 'absolute',
              // margin: '-7px',
              // top: '75.5em',
              height: "600px",
              width: "100%",
              backgroundColor: "#0058a3"
            }}
          >
            <Footer></Footer>
          </div>

          <div className="as-modal">
            {/* <button onClick={this.toggleModal}> Open modal </button> */}
            <div className="as-hoverModal">
              <Modal
                show={this.state.modalState}
                // onClose={this.toggleModal}
                product={this.state.onLoadProducts[0]}
              ></Modal>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
