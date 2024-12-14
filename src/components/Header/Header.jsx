import { navItem, subNavItem } from "../../data/category.js";
import { contacts } from "../../data/contacts.js";
import { Link } from "react-router-dom";
import "../../sass/index.scss";
import logo from "/assets/img/logo.svg";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <div className="topheader">
        <div className="container">
          <div className="row">
            <div className="nav justify-content-between">
              <li className="nav-item"></li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`tel:${contacts.phoneNumber.replace(/[\s.()]/g, "")}`}
                >
                  <svg
                    className="topheader-phone-img bi bi-telephone"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <label>{contacts.phoneNumber}</label>
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="subheader">
        <div className="container">
          <div className="row">
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">
                  <Image src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="">
                  <Nav
                    className="ms-auto me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    {navItem.map((item) => (
                      <Nav.Link
                        className="nav-link"
                        key={item.id}
                        as={Link}
                        to={"" + item.url}
                      >
                        {item.title}
                      </Nav.Link>
                    ))}
                    <NavDropdown
                      title="О компании"
                      id="navbarScrollingDropdown"
                    >
                      {subNavItem.map((item) => (
                        <NavDropdown.Item
                          key={item.id}
                          as={Link}
                          to={"" + item.url}
                        >
                          {item.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
}
