import React from 'react';
import styled from 'styled-components';

let YouLikeArrow = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  z-index: 99;
  cursor: pointer;
  height: 30px;
  width: 30px;
`

const YouLikeLeftArrow = (props) => {
  return (
    <YouLikeArrow>
      <svg onClick={props.previousYouLikeView} height='30' width='30'>
        <path d="M 11.7 18.22 L 6.43 13 H 20 V 11 H 6.4 l 5.31 -5.37 L 10.29 4.22 L 2.59 12 l 7.71 7.64 Z"></path>
      </svg>
    </YouLikeArrow>
  )

}

export default YouLikeLeftArrow;