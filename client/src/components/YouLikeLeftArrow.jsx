import React from 'react';
import styled from 'styled-components';

const YouLikeArrow = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  z-index: 99;
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 200%;
`;
  
const Svg = styled.svg`
  position: absolute;
  top: 1.15rem;
  left: 1.15rem;
  height: 30px;
  width: 30px;
`;

const Circle = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  top: -1rem;
  left: 0rem;
  border-radius: 200%;

  &:hover {
    background-color: #bbb;
  }
`;

const YouLikeLeftArrow = (props) => {
  return (
    <YouLikeArrow>
      <Circle>
      <Svg onClick={props.previousYouLikeView}>
        <path d="M 11.7 18.22 L 6.43 13 H 20 V 11 H 6.4 l 5.31 -5.37 L 10.29 4.22 L 2.59 12 l 7.71 7.64 Z"></path>
      </Svg>
      </Circle>
    </YouLikeArrow>
  )

}

export default YouLikeLeftArrow;