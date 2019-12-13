import React from 'react';
// import styled from 'styled-components';

const Footer = () => {
  return (
    <div className="as-footerWrapper">

      <div className="as-helpFamily">
        <span className="as-helpSpan">
          <svg className="as-styledHelpIcon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19,15H10V14h9Zm0-3H10V11h9ZM4,11H5v1H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H15a2,2,0,0,1,2,2V6H16V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4v6A1,1,0,0,0,4,11Zm6,0h9v1H10Zm0,3h9v1H10ZM20,8H9a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h5l5,4V18h1a2,2,0,0,0,2-2V10A2,2,0,0,0,20,8Zm1,8a1,1,0,0,1-1,1H18v2.92L14.35,17H9a1,1,0,0,1-1-1V10A1,1,0,0,1,9,9H20a1,1,0,0,1,1,1Z">
            </path>
          </svg>
          <div className="as-styledHelp">&nbsp; Help</div>
        </span>
        <div className="as-styledHelpList">
          <div className="as-styledHelpListEntry">Customer Service </div>
          <div className="as-styledHelpListEntry">FAQ </div>
          <div className="as-styledHelpListEntry">Contact Us </div>
          <div className="as-styledHelpListEntry">Product Recalls </div>
          <div className="as-styledHelpListEntry">Return Policy </div>
          <div className="as-styledHelpListEntry">Warranties </div>
          <div className="as-styledHelpListEntry">Feedback </div>
        </div>
      </div>

      <div className="as-shopFamily">
        <span className="as-shopSpan">
          <svg className="as-styledShopIcon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2,6V19H21V6Zm9,12H7V13h4Zm5,0H12V13h4Zm1,0V12H6v6H3V7H20V18Z">
            </path>
          </svg>
          <div className="as-styledShop">&nbsp; Shop & Learn</div>
        </span>
        <div className="as-styledShopList">
          <div className="as-styledShopListEntry">Find a Location </div>
          <div className="as-styledShopListEntry">IKEA Services </div>
          <div className="as-styledShopListEntry">IKEA Catalog </div>
          <div className="as-styledShopListEntry">IKEA Brochures </div>
          <div className="as-styledShopListEntry">IKEA Family </div>
          <div className="as-styledShopListEntry">IKEA Planning Tools </div>
          <div className="as-styledShopListEntry">Buying Guides </div>
          <div className="as-styledShopListEntry">Gift Cards </div>
          <div className="as-styledShopListEntry">Gift Registry </div>
          <div className="as-styledShopListEntry">IKEA Credit Card Management </div>
        </div>
      </div>

      <div className="as-aboutFamily">
        <span className="as-aboutSpan">
          <svg className="as-styledAboutIcon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19,5H14.15A2.88,2.88,0,0,0,12,6,2.88,2.88,0,0,0,9.86,5H2V19h8.57A1.28,1.28,0,0,1,12,20s0,0,0,0l0,0a1.26,1.26,0,0,1,1.41-1H22V8ZM11.5,18.09a2.82,2.82,0,0,0-.71-.09H3V6h7.07A1.43,1.43,0,0,1,11.5,7.43ZM21,18H13.22a3,3,0,0,0-.72.09V7.43A1.43,1.43,0,0,1,13.93,6H18V9h3Z">
              </path>
          </svg>
          <div className="as-styledAbout">&nbsp; About IKEA</div>
        </span>
        <div className="as-styledAboutList">
          <div className="as-styledAboutListEntry">This is IKEA </div>
          <div className="as-styledAboutListEntry">Careers </div>
          <div className="as-styledAboutListEntry">Newsroom </div>
          <div className="as-styledAboutListEntry">Democratic Design </div>
          <div className="as-styledAboutListEntry">A Sustainable Everyday </div>
          <div className="as-styledAboutListEntry">IKEA Foundation </div>
          <div className="as-styledAboutListEntry">Creating Safer Homes Together </div>
        </div>
      </div>

      <div className="as-infoFamily">
        <span className="as-infoSpan">
          <svg className="as-styledInfoIcon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 19a9 9 0 1 1 9-9 9 9 0 0 1-9 9z"></path>
            <path d="M11 10h2v8h-2z"></path>
            <circle cx="12" cy="7.75" r="1.25"></circle>
          </svg>
          <div className="as-styledInfo">&nbsp; Legal Disclaimers</div>
        </span>
        <div className="as-styledInfoList">
          <div className="as-styledInfoListEntry">Privacy & Security </div>
          <div className="as-styledInfoListEntry">Privacy Policy </div>
          <div className="as-styledInfoListEntry">Terms and Conditions </div>
          <div className="as-styledInfoListEntry">IKEA Children's Product </div>
          <div className="as-styledInfoListEntry">Registration </div>
        </div>
      </div>

    </div>
  )
}

export default Footer