import React from "react";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <Nav className="justify-content-end" variant="tabs" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1" href="/">
          Início      
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Mídia" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Audios</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Filmes</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Imagens</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Biblioteca" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Documentos</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Arquivos</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Livros</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Produções</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}