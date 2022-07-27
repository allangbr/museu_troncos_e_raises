import React from "react";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <Nav className="justify-content-end" variant="" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1" href="/">
          Início      
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Mídia" id="nav-dropdown">
        <NavDropdown.Item eventKey="2.1" href="/audio">Audios</NavDropdown.Item>
        <NavDropdown.Item eventKey="2.2" href="/movie">Filmes</NavDropdown.Item>
        <NavDropdown.Item eventKey="2.3" href="/gallery">Imagens</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="3" href="/document">
          Documentos      
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" href="/document">
          Site Saberes      
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}