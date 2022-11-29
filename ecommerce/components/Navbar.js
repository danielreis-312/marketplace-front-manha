import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavbarMarketplace() {
  return (
    <>
      <Navbar expand="sm" className="border-bottom">
        <Container fluid>
          <Navbar.Brand>O MarketPlace</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav" className="flex-grow-0">
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link>Sobre</Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link>Ajuda</Nav.Link>
              </Link>
              <Link href="/login" passHref>
                <Nav.Link>Entrar</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
