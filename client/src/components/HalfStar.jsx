import React from 'react';
import styled from 'styled-components';

const StyledHalf = styled.div`
  height: 25px;
  width: 25px;
`;

const Svg = styled.svg`
`;

const HalfStar = (props) => {

  return (
    <StyledHalf>
      <Svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="2 0 100 100">
          <defs>
              <linearGradient id="half_grad">
                  <stop offset="50%" stop-color="#FFD200" />
                  <stop offset="50%" stop-color="#EEE" stop-opacity="1" />
              </linearGradient>
          </defs>
          <path fill="url(#half_grad)" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />
      </Svg>
    </StyledHalf>
  )

}

export default HalfStar;