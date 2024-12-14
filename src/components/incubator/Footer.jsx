import React from "react";
// import '../App.css'
import { BoxLinks } from "./BoxLinks.jsx";

function Footer() {
  const forClient = listForClient.map((c, i) => (
    <BoxLinks.Item key={i} {...c} />
  ));
  const infos = listForClient.map((c, i) => <BoxLinks.Item key={i} {...c} />);

  return (
    <div id="footer">
      <div id="foot__logo">
        <h1>Logo</h1>
      </div>
      <div id="foot__links">
        <div id="foot__links-col">
          <BoxLinks.Box title={"Клиентам"} items={forClient} />
        </div>
        <div id="foot__links-col">
          <BoxLinks.Box title={"О компании"} items={infos} />
        </div>
        <div id="foot__phone"></div>
      </div>
    </div>
  );
}

export default Footer;
