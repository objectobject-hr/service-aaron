import React from "react";

function FooterMenu({ svg, title, items }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          lineHeight: "200%",
          marginTop: 100
        }}
      >
        {svg}
        <span style={{ paddingLeft: 8 }}>{title}</span>
      </div>
      <br></br>
      <div>
        {items.map((item, i) => (
          <div
            className="as-styledFooterListEntry"
            key={`footer-menu-${item}-${i}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterMenu;
