import React from 'react';
import styled from 'styled-components';

const StyledHelpIcon = styled.div`
  height: 30px;
  width: 30px;
`;

const Footer = () => {
  return (
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,15H10V14h9Zm0-3H10V11h9ZM4,11H5v1H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H15a2,2,0,0,1,2,2V6H16V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4v6A1,1,0,0,0,4,11Zm6,0h9v1H10Zm0,3h9v1H10ZM20,8H9a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h5l5,4V18h1a2,2,0,0,0,2-2V10A2,2,0,0,0,20,8Zm1,8a1,1,0,0,1-1,1H18v2.92L14.35,17H9a1,1,0,0,1-1-1V10A1,1,0,0,1,9,9H20a1,1,0,0,1,1,1Z"></path></svg>
  )
}

export default Footer