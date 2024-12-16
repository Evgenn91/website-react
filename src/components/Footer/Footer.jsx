import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { listForClient, listInfo } from "../../data/category.js";
import { Link } from "react-router-dom";
import logo from "/assets/img/logo_footer.svg";
import "../../sass/index.scss";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Image src={logo} />
          </Col>
          <Col xs={12} md={4}>
            <h3>Клиентам</h3>
            <ul>
              {listForClient.map((item) => (
                <Nav.Link
                  className="nav-link"
                  key={item.id}
                  as={Link}
                  to={"" + item.url}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>О компании</h3>
            <ul>
              {listInfo.map((item) => (
                <Nav.Link
                  className="nav-link"
                  key={item.id}
                  as={Link}
                  to={"" + item.url}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Контакты</h3>
            <p>Номер телефона: +1234567890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
