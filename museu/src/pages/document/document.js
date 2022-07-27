import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import "./document.css";

export default function Document() {
  return (
    <>
      <Navbar/>
      <h1>Documentos</h1>
      <div className='document-list'>
        <ul id="list">
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
          <li><a href='../../files/arquivos/Curriculo2022.pdf' download={"Curriculo2022.pdf"} type="application/pdf">Baixar Curriculo David Devolindo</a></li>
        </ul>
      </div>
      
      <div className="footer-div">
        <Footer/>
      </div>
    </>
  )
}