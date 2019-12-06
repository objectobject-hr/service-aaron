import React from 'react';
import styled from 'styled-components';

const IkeaArrow = styled.div`
  position: absolute;
  top: 15rem;
  right: 11rem;
  z-index: 99;
  cursor: pointer;
  height: 30px;
  width: 30px;
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


const RightArrow = (props) => {
  return (
    <IkeaArrow>
      <Circle>
        <Svg onClick={props.nextView}>
          <path d="M 12.29 18.37 l 1.42 1.4 L 21.41 12 L 13.7 4.36 L 12.3 5.78 L 17.57 11 H 4 v 2 H 17.6 Z"></path>
        </Svg>
      </Circle>
    </IkeaArrow>
  )

}

export default RightArrow;