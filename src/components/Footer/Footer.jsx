import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img src="logo.png" alt="Logo" />
          </Col>
          <Col xs={12} md={4}>
            <h3>Клиентам</h3>
            <ul>
              <li>Контакты</li>
              <li>Политика конфиденциальности</li>
              <li>Условия использования</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>О компании</h3>
            <ul>
              <li>О нас</li>
              <li>Новости</li>
              <li>Контакты</li>
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
