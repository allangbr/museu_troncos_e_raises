import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import "./document.css";
const pdf = "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000"

export default function Document() {

  const [download, setDownload] = useState('')
  return (
    <>
      <Navbar/>
      <h1>Documentos</h1>
      <div className='document-list'>
        <ul id="list">
          <li><a href='assets/arquivos/A antropologia na esfera publica patrimônios culturais e museus.pdf' download="A antropologia na esfera publica patrimônios culturais e museus.pdf">A antropologia na esfera publica patrimônios culturais e museus</a></li>

          <li><a href='assets/arquivos/A colonização do sertão da Paraíba agentes produtores do espaço e contatos interétnicos.pdf' download="A colonização do sertão da Paraíba agentes produtores do espaço e contatos interétnicos.pdf">A colonização do sertão da Paraíba agentes produtores do espaço e contatos interétnicos</a></li>

          <li><a href='Antropologia e turismo coletânea franco brasiileira.pdf' download="Antropologia e turismo coletânea franco brasiileira.pdf">Antropologia e turismo coletânea franco brasiileira</a></li>

          <li><a href='- Artigo A botija da Serra da Rajada.pdf' download="- Artigo A botija da Serra da Rajada.pdf">Artigo A botija da Serra da Rajada</a></li>

          <li><a href='Artigo - MEMÓRIA FOTOGRÁFICA DE UMA COMUNIDADE ... - Geraldo Barboza Jr.pdf' download="Artigo - MEMÓRIA FOTOGRÁFICA DE UMA COMUNIDADE ... - Geraldo Barboza Jr.pdf">Artigo - MEMÓRIA FOTOGRÁFICA DE UMA COMUNIDADE ... - Geraldo Barboza Jr</a></li>

          <li><a href='Artigo pronto IRMANDADES DO ROSÁRIO..pdf' download="Artigo pronto IRMANDADES DO ROSÁRIO..pdf">Artigo pronto IRMANDADES DO ROSÁRIO</a></li>

          <li><a href='As voltas da história_ terra, memória e educação patrimonial na boa vista dos negros.pdf' download="As voltas da história_ terra, memória e educação patrimonial na boa vista dos negros.pdf">As voltas da história_ terra, memória e educação patrimonial na boa vista dos negros</a></li>

          <li><a href='caminhos_de_natal_web.pdf' download="caminhos_de_natal_web.pdf">Caminhos de Natal web</a></li>

          <li><a href='Centro histórico de Natal – Ebook.pdf' download="Centro histórico de Natal – Ebook.pdf">Centro histórico de Natal – Ebook</a></li>

          <li><a href='Comidas de raiz a retomada da cultura quilombola no Seridó (Brasil).pdf' download="Comidas de raiz a retomada da cultura quilombola no Seridó (Brasil).pdf">Comidas de raiz a retomada da cultura quilombola no Seridó (Brasil)</a></li>

          <li><a href='demarcação das barrentas.docx' download="demarcação das barrentas.docx">Demarcação das barrentas</a></li>
          <li><a href='Desafios identitários e experiências patrimoniais o Programa Tronco, Ramos e Raízes.pdf' download="Desafios identitários e experiências patrimoniais o Programa Tronco, Ramos e Raízes.pdf">Desafios identitários e experiências patrimoniais o Programa Tronco, Ramos e Raízes</a></li>

          <li><a href='Documentos da Irmandade do Rosário (Jadim do Seridó).docx' download="Documentos da Irmandade do Rosário (Jadim do Seridó).docx">Documentos da Irmandade do Rosário (Jadim do Seridó)</a></li>

          <li><a href='Documentos das irmandades.docx' download="Documentos das irmandades.docx">Documentos das irmandades</a></li>

          <li><a href='Ensaios sobre a Antropologia da alimentação - saberes, dinâmicas e patrimônios.pdf' download="Ensaios sobre a Antropologia da alimentação - saberes, dinâmicas e patrimônios.pdf">Ensaios sobre a Antropologia da alimentação - saberes, dinâmicas e patrimônios</a></li>

          <li><a href='Entre estratégias e táticas_ enredos das festas dos negros do Rosário em Jardim do Seridó-RN.pdf' download="Entre estratégias e táticas_ enredos das festas dos negros do Rosário em Jardim do Seridó-RN.pdf">Entre estratégias e táticas/ enredos das festas dos negros do Rosário em Jardim do Seridó-RN</a></li>

          <li><a href='fazendas do acari.pdf' download="fazendas do acari.pdf">Fazendas do Acari</a></li>

          <li><a href='FILHO, Valdemiro S. A missão do Guajirú e a política indigenista do Marquês de Pombal.pdf' download="FILHO, Valdemiro S. A missão do Guajirú e a política indigenista do Marquês de Pombal.pdf">FILHO, Valdemiro S. A missão do Guajirú e a política indigenista do Marquês de Pombal</a></li>

          <li><a href='FILHO, Valdemiro S. De Cidade dos Veados a Rio dos Índios.pdf' download="FILHO, Valdemiro S. De Cidade dos Veados a Rio dos Índios.pdf">FILHO, Valdemiro S. De Cidade dos Veados a Rio dos Índios</a></li>

          <li><a href='FOLCLORE, TURISMO E SABERES CULINÁRIOS NO NORDESTE BRASILEIRO.pdf' download="FOLCLORE, TURISMO E SABERES CULINÁRIOS NO NORDESTE BRASILEIRO.pdf">FOLCLORE, TURISMO E SABERES CULINÁRIOS NO NORDESTE BRASILEIRO</a></li>

          <li><a href='GloriaDissertaçao.pdf' download="GloriaDissertaçao.pdf">Gloria Dissertaçao</a></li>

          <li><a href='Guia Cultural Afro_MIOLO.pdf' download="Guia Cultural Afro_MIOLO.pdf">Guia Cultural Afro_MIOLO</a></li>

          <li><a href='Guia Indigena_ebook.pdf' download="Guia Indigena_ebookO.pdf">Guia Indigena ebook</a></li>

          <li><a href='Historia e etnografia nativas_2010.pdf' download="Historia e etnografia nativas_2010.pdf">Historia e etnografia nativas 2010</a></li>

          <li><a href='inventário de feliciano pereira da rocha.docx' download="inventário de feliciano pereira da rocha.docx">Inventário de feliciano pereira da rocha</a></li>

          <li><a href='inventário de feliciano pereira da cruz.docx' download="inventário de feliciano pereira da cruz.docx">Inventário de feliciano pereira da cruz</a></li>

          <li><a href='inventário de joão da silva lira.docx' download="inventário de joão da silva lira.docx">Inventário de joão da silva lira</a></li>

          <li><a href='inventário de maria madalena.docx' download="inventário de maria madalena.docx">Inventário de maria madalena</a></li>

          <li><a href='inventário de maria pereira da rocha.docx' download="inventário de maria pereira da rocha.docx">Inventário de maria pereira da rocha</a></li>

          <li><a href='inventário de tomazia fernandes da silva.docx' download="inventário de tomazia fernandes da silva.docx">Inventário de tomazia fernandes da silva</a></li>

          <li><a href='JussaraDissertacao.pdf' download="JussaraDissertacao.pdf">Jussara Dissertacao</a></li>

        </ul>
      </div>
      
      <div className="footer-div">
        <Footer/>
      </div>
    </>
  )
}