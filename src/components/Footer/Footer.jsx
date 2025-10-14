import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { listForClient, listInfo } from "../../data/category.js";
import { contacts } from "../../data/contacts.js";
import { Link } from "react-router-dom";
import logo from "/assets/img/logo_footer.svg";
import "../../sass/index.scss";
import Copyright from "../Сopyright/Copyright.jsx";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4} className="logo-footer">
            <Image className="footer-img" src={logo} />
          </Col>
          <Col xs={12} md={2} className="footer-link">
            <h3 className="title-link">Клиентам</h3>
            <ul>
              {listForClient.map((item) => (
                <Nav.Link
                  className="link"
                  key={item.id}
                  as={Link}
                  to={"" + item.url}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={2} className="footer-link">
            <h3 className="title-link">О компании</h3>
            <ul>
              {listInfo.map((item) => (
                <Nav.Link
                  className="link"
                  key={item.id}
                  as={Link}
                  to={"" + item.url}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={2} className="footer-link">
            <p>
              <a
                className="nav-link"
                href={`tel:${contacts.phoneNumber.replace(/[\s.()-]/g, "")}`}
              >
                <label className="phone">{contacts.phoneNumber}</label>
              </a>
            </p>
          </Col>
          <Col xs={12} md={12} className="copyright-footer text-center">
            <Copyright />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
