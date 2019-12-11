import React from 'react';
import styled from 'styled-components';

const StyledHelpIcon = styled.svg`
  height: 2.25rem;
  width: 2.25rem;
  stroke-width: 0.5;
  fill: white;
  stroke: none;

  position: absolute;
  top: 100px;
  left: 60px;
`;

const StyledHelp = styled.div`
  position: absolute;
  top: 105px;
  left: 105px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  font-weight: 700;
`;

const StyledHelpList = styled.div`
  position: absolute;
  top: 150px;
  left: 60px;

`;

const StyledHelpListEntry = styled.div`
  font-family: 'Noto Sans', sans-serif;
  color: white;
  line-height: 200%;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledStoreIcon = styled.svg`
  height: 2.25rem;
  width: 2.25rem;
  stroke-width: 0.5;
  fill: white;
  stroke: none;

  position: absolute;
  top: 100px;
  left: 375px;
`;

const StyledShop = styled.div`
  position: absolute;
  top: 105px;
  left: 420px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  font-weight: 700;
`;

const StyledShopList = styled.div`
  position: absolute;
  top: 150px;
  left: 375px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  line-height: 200%;
`;

const StyledShopListEntry = styled.div`
font-family: 'Noto Sans', sans-serif;
color: white;
line-height: 200%;
&:hover {
  text-decoration: underline;
}
`;

const StyledAboutIcon = styled.svg`
  height: 2.25rem;
  width: 2.25rem;
  stroke-width: 0.5;
  fill: white;
  stroke: none;

  position: absolute;
  top: 100px;
  left: 700px;
`;

const StyledAbout = styled.div`
  position: absolute;
  top: 105px;
  left: 750px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  font-weight: 700;
`;

const StyledAboutList = styled.div`
  position: absolute;
  top: 150px;
  left: 700px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  line-height: 200%;
`;

const StyledAboutListEntry = styled.div`
font-family: 'Noto Sans', sans-serif;
color: white;
line-height: 200%;
&:hover {
  text-decoration: underline;
}
`;

const StyledInfoIcon = styled.svg`
  height: 2.25rem;
  width: 2.25rem;
  stroke-width: 0.5;
  fill: white;
  stroke: none;

  position: absolute;
  top: 100px;
  left: 980px;
`;

const StyledInfo = styled.div`
  position: absolute;
  top: 105px;
  left: 1025px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  font-weight: 700;
`;

const StyledInfoList = styled.div`
  position: absolute;
  top: 150px;
  left: 980px;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  line-height: 200%;
`;

const StyledInfoListEntry = styled.div`
font-family: 'Noto Sans', sans-serif;
color: white;
line-height: 200%;
&:hover {
  text-decoration: underline;
}
`;

const Footer = () => {
  return (
    <div>
      <StyledHelpIcon focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19,15H10V14h9Zm0-3H10V11h9ZM4,11H5v1H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H15a2,2,0,0,1,2,2V6H16V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4v6A1,1,0,0,0,4,11Zm6,0h9v1H10Zm0,3h9v1H10ZM20,8H9a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h5l5,4V18h1a2,2,0,0,0,2-2V10A2,2,0,0,0,20,8Zm1,8a1,1,0,0,1-1,1H18v2.92L14.35,17H9a1,1,0,0,1-1-1V10A1,1,0,0,1,9,9H20a1,1,0,0,1,1,1Z">
        </path></StyledHelpIcon>
      <StyledHelp>Help</StyledHelp>
      <StyledHelpList>
        <StyledHelpListEntry>Customer Service </StyledHelpListEntry>
        <StyledHelpListEntry>FAQ </StyledHelpListEntry>
        <StyledHelpListEntry>Contact Us </StyledHelpListEntry>
        <StyledHelpListEntry>Product Recalls </StyledHelpListEntry>
        <StyledHelpListEntry>Return Policy </StyledHelpListEntry>
        <StyledHelpListEntry>Warranties </StyledHelpListEntry>
        <StyledHelpListEntry>Feedback </StyledHelpListEntry>
      </StyledHelpList>

      <StyledStoreIcon focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M2,6V19H21V6Zm9,12H7V13h4Zm5,0H12V13h4Zm1,0V12H6v6H3V7H20V18Z">
        </path>
      </StyledStoreIcon>
      <StyledShop>Shop & Learn</StyledShop>
      <StyledShopList>
        <StyledShopListEntry>Find a Location </StyledShopListEntry>
        <StyledShopListEntry>IKEA Services </StyledShopListEntry>
        <StyledShopListEntry>IKEA Catalog </StyledShopListEntry>
        <StyledShopListEntry>IKEA Brochures </StyledShopListEntry>
        <StyledShopListEntry>IKEA Family </StyledShopListEntry>
        <StyledShopListEntry>IKEA Planning Tools </StyledShopListEntry>
        <StyledShopListEntry>Buying Guides </StyledShopListEntry>
        <StyledShopListEntry>Gift Cards </StyledShopListEntry>
        <StyledShopListEntry>Gift Registry </StyledShopListEntry>
        <StyledShopListEntry>IKEA Credit Card Management </StyledShopListEntry>
      </StyledShopList>

      <StyledAboutIcon focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19,5H14.15A2.88,2.88,0,0,0,12,6,2.88,2.88,0,0,0,9.86,5H2V19h8.57A1.28,1.28,0,0,1,12,20s0,0,0,0l0,0a1.26,1.26,0,0,1,1.41-1H22V8ZM11.5,18.09a2.82,2.82,0,0,0-.71-.09H3V6h7.07A1.43,1.43,0,0,1,11.5,7.43ZM21,18H13.22a3,3,0,0,0-.72.09V7.43A1.43,1.43,0,0,1,13.93,6H18V9h3Z">
          </path>
      </StyledAboutIcon>
      <StyledAbout>About IKEA</StyledAbout>
      <StyledAboutList>
        <StyledAboutListEntry>This is IKEA </StyledAboutListEntry>
        <StyledAboutListEntry>Careers </StyledAboutListEntry>
        <StyledAboutListEntry>Newsroom </StyledAboutListEntry>
        <StyledAboutListEntry>Democratic Design </StyledAboutListEntry>
        <StyledAboutListEntry>A Sustainable Everyday </StyledAboutListEntry>
        <StyledAboutListEntry>IKEA Foundation </StyledAboutListEntry>
        <StyledAboutListEntry>Creating Safer Homes Together </StyledAboutListEntry>
      </StyledAboutList>

      <StyledInfoIcon focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9z"></path>
        <path d="M11 10h2v8h-2z"></path>
        <circle cx="12" cy="7.75" r="1.25"></circle>
      </StyledInfoIcon>
      <StyledInfo>Legal Disclaimers</StyledInfo>
      <StyledInfoList>
        <StyledInfoListEntry>Privacy & Security </StyledInfoListEntry>
        <StyledInfoListEntry>Privacy Policy </StyledInfoListEntry>
        <StyledInfoListEntry>Terms and Conditions </StyledInfoListEntry>
        <StyledInfoListEntry>IKEA Children's Product </StyledInfoListEntry>
        <StyledInfoListEntry>Registration </StyledInfoListEntry>
      </StyledInfoList>
    </div>
  )
}

export default Footer