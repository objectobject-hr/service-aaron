import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ShowAllHistoryEntry from './ShowAllHistoryEntry.jsx';

const StyledHistory = styled.div`
  position: absolute;
  display: flex;
  height: 100px;
  width: 800px;
  left: 1rem;
  cursor: pointer;  
`;

const StyledShowHistory = styled.div`
  position: absolute;
  top: 2rem;
  left: 66rem;
  font-family: 'Noto Sans', sans-serif;
  color: #0058a3;
  font-weight: 900;
  z-index: 10;
  cursor: pointer;
  &:hover {
      text-decoration: underline;
      color: #2196f3;
  }
`;

class ShowAllHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
      latestHistory: []
    }
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  getHistory() {
    axios.get('/products')
      .then((response) => {
        this.setState({
          history: this.shuffleArray(response.data)
        })
      })
      .then(() => {
        this.setState({
          latestHistory: this.state.history.slice(0,10)
        })
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getHistory();
  }

  render() {
    return (
      <div>
        <StyledHistory>
          {this.state.latestHistory.map((item, index) => (
            <ShowAllHistoryEntry product={item} key={index} />
          ))}
        </StyledHistory>
        <StyledShowHistory>Show all history</StyledShowHistory>
      </div>
    )
  }

}

export default ShowAllHistory;
  // render() {
  //   return (
  //     <div>
  //       <StyledHistory>
  //         {this.state.latestHistory.map((item, index) => (
  //           <div className="productimage" style={{
  //             paddingLeft: '15px',
  //             paddingRight: '15px'
  //           }}>
  //             <img src={item.itemimage} key={index} height="70" width="70"/>
  //           </div>
  //         ))}
  //       </StyledHistory>
  //       <StyledShowHistory >Show all history</StyledShowHistory>
  //     </div>
  //   )
  // }