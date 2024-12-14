import React from "react";
// import '../App.css'
import { BoxLinks } from "./incubator/BoxLinks.jsx";

const listForClient = [
  {
    href: "https://gorod-lombard.ru/instructions",
    title: "Оплата процентов",
  },
  {
    href: "https://gorod-lombard.ru/feedback",
    title: "Обратная связь",
  },
  {
    href: "https://gorod-lombard.ru/app",
    title: "Мобильное приложение",
  },
];

const listInfo = [
  {
    href: "https://gorod-lombard.ru/addresses",
    title: "Наши ломбарды",
  },
  {
    href: "https://gorod-lombard.ru/requisites",
    title: "Реквизиты",
  },
  {
    href: "https://gorod-lombard.ru/documentation",
    title: "Документы",
  },
];

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
