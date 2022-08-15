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

          <li><a href='assets/arquivos/A missão do Guajirú e a política indigenista do Marquês de Pombal.pdf' download="A missão do Guajirú e a política indigenista do Marquês de Pombal.pdf">A missão do Guajirú e a política indigenista do Marquês de Pombal</a></li>

          <li><a href='assets/arquivos/Antropologia e turismo coletânea franco brasiileira.pdf' download="Antropologia e turismo coletânea franco brasiileira.pdf">Antropologia e turismo coletânea franco brasiileira</a></li>

          <li><a href='assets/arquivos/- Artigo A botija da Serra da Rajada.pdf' download="- Artigo A botija da Serra da Rajada.pdf">Artigo A botija da Serra da Rajada</a></li>

          <li><a href='assets/arquivos/Artigo - MEMÓRIA FOTOGRÁFICA DE UMA COMUNIDADE ... - Geraldo Barboza Jr.pdf' download="Artigo - MEMÓRIA FOTOGRÁFICA DE UMA COMUNIDADE ... - Geraldo Barboza Jr.pdf">Artigo - MEMÓRIA FOTOGRÁFICA DE UMA COMUNIDADE ... - Geraldo Barboza Jr</a></li>

          <li><a href='assets/arquivos/Artigo pronto IRMANDADES DO ROSÁRIO..pdf' download="Artigo pronto IRMANDADES DO ROSÁRIO..pdf">Artigo pronto IRMANDADES DO ROSÁRIO</a></li>

          <li><a href='assets/arquivos/As voltas da história_ terra, memória e educação patrimonial na boa vista dos negros.pdf' download="As voltas da história_ terra, memória e educação patrimonial na boa vista dos negros.pdf">As voltas da história_ terra, memória e educação patrimonial na boa vista dos negros</a></li>

          <li><a href='assets/arquivos/caminhos_de_natal_web.pdf' download="caminhos_de_natal_web.pdf">Caminhos de Natal web</a></li>

          <li><a href='assets/arquivos/Centro histórico de Natal – Ebook.pdf' download="Centro histórico de Natal – Ebook.pdf">Centro histórico de Natal – Ebook</a></li>

          <li><a href='assets/arquivos/Comidas de raiz a retomada da cultura quilombola no Seridó (Brasil).pdf' download="Comidas de raiz a retomada da cultura quilombola no Seridó (Brasil).pdf">Comidas de raiz a retomada da cultura quilombola no Seridó (Brasil)</a></li>

          <li><a href='assets/arquivos/De Cidade dos Veados a Rio dos Índios.pdf' download="De Cidade dos Veados a Rio dos Índios.pdf">De Cidade dos Veados a Rio dos Índios</a></li>

          <li><a href='assets/arquivos/demarcação das barrentas.docx' download="demarcação das barrentas.docx">Demarcação das barrentas</a></li>

          <li><a href='assets/arquivos/Desafios identitários e experiências patrimoniais o Programa Tronco, Ramos e Raízes.pdf' download="Desafios identitários e experiências patrimoniais o Programa Tronco, Ramos e Raízes.pdf">Desafios identitários e experiências patrimoniais o Programa Tronco, Ramos e Raízes</a></li>

          <li><a href='assets/arquivos/Documentos da Irmandade do Rosário (Jadim do Seridó).docx' download="Documentos da Irmandade do Rosário (Jadim do Seridó).docx">Documentos da Irmandade do Rosário (Jadim do Seridó)</a></li>

          <li><a href='assets/arquivos/Documentos das irmandades.docx' download="Documentos das irmandades.docx">Documentos das irmandades</a></li>

          <li><a href='assets/arquivos/Ensaios sobre a Antropologia da alimentação - saberes, dinâmicas e patrimônios.pdf' download="Ensaios sobre a Antropologia da alimentação - saberes, dinâmicas e patrimônios.pdf">Ensaios sobre a Antropologia da alimentação - saberes, dinâmicas e patrimônios</a></li>

          <li><a href='assets/arquivos/Entre estratégias e táticas_ enredos das festas dos negros do Rosário em Jardim do Seridó-RN.pdf' download="Entre estratégias e táticas_ enredos das festas dos negros do Rosário em Jardim do Seridó-RN.pdf">Entre estratégias e táticas/ enredos das festas dos negros do Rosário em Jardim do Seridó-RN</a></li>

          <li><a href='assets/arquivos/fazendas do acari.pdf' download="fazendas do acari.pdf">Fazendas do Acari</a></li>

          <li><a href='assets/arquivos/FOLCLORE, TURISMO E SABERES CULINÁRIOS NO NORDESTE BRASILEIRO.pdf' download="FOLCLORE, TURISMO E SABERES CULINÁRIOS NO NORDESTE BRASILEIRO.pdf">FOLCLORE, TURISMO E SABERES CULINÁRIOS NO NORDESTE BRASILEIRO</a></li>

          <li><a href='assets/arquivos/GloriaDissertaçao.pdf' download="GloriaDissertaçao.pdf">Gloria Dissertaçao</a></li>

          <li><a href='assets/arquivos/Guia Cultural Afro_MIOLO.pdf' download="Guia Cultural Afro_MIOLO.pdf">Guia Cultural Afro_MIOLO</a></li>

          <li><a href='assets/arquivos/Guia Indigena_ebook.pdf' download="Guia Indigena_ebookO.pdf">Guia Indigena ebook</a></li>

          <li><a href='assets/arquivos/Historia e etnografia nativas_2010.pdf' download="Historia e etnografia nativas_2010.pdf">Historia e etnografia nativas 2010</a></li>

          <li><a href='assets/arquivos/inventário de feliciano pereira da rocha.docx' download="inventário de feliciano pereira da rocha.docx">Inventário de feliciano pereira da rocha</a></li>

          <li><a href='assets/arquivos/inventário de feliciano pereira da cruz.docx' download="inventário de feliciano pereira da cruz.docx">Inventário de feliciano pereira da cruz</a></li>

          <li><a href='assets/arquivos/inventário de joão da silva lira.docx' download="inventário de joão da silva lira.docx">Inventário de joão da silva lira</a></li>

          <li><a href='assets/arquivos/inventário de maria madalena.docx' download="inventário de maria madalena.docx">Inventário de maria madalena</a></li>

          <li><a href='assets/arquivos/inventário de maria pereira da rocha.docx' download="inventário de maria pereira da rocha.docx">Inventário de maria pereira da rocha</a></li>

          <li><a href='assets/arquivos/inventário de tomazia fernandes da silva.docx' download="inventário de tomazia fernandes da silva.docx">Inventário de tomazia fernandes da silva</a></li>

          <li><a href='assets/arquivos/JussaraDissertacao.pdf' download="JussaraDissertacao.pdf">Jussara Dissertacao</a></li>
          
          <li><a href='assets/arquivos/Los_hilos_de_la_memoria_los_derechos_colectivos_a_.pdf' download="Los_hilos_de_la_memoria_los_derechos_colectivos_a_.pdf">Los hilos de la memoria los derechos colectivos a</a></li>

          <li><a href='assets/arquivos/Mito_e_Memória.pdf' download="Mito_e_Memória.pdf">Mito e Memória</a></li>

          <li><a href='assets/arquivos/Monografia - Apontamentossobreahistoriaindigena_Monografia.pdf' download="Monografia - Apontamentossobreahistoriaindigena_Monografia.pdf">Monografia - Apontamentos sobre à historia indigena</a></li>

          <li><a href='assets/arquivos/monografiaDiego.doc' download="monografiaDiego.doc">Monografia Diego</a></li>

          <li><a href='assets/arquivos/monografiaJuarez.doc' download="monografiaJuarez.doc">Monografia Juarez</a></li>

          <li><a href='assets/arquivos/Museus e atores sociais  perspectivas antropologicas.pdf' download="Museus e atores sociais  perspectivas antropologicas.pdf">Museus e atores sociais  perspectivas antropologicas</a></li>

          <li><a href='assets/arquivos/Na cozinha com Câmara Cascudo história, etnografia e folclore nos estudos da alimentação no Brasi.pdf' download="Na cozinha com Câmara Cascudo história, etnografia e folclore nos estudos da alimentação no Brasi.pdf">Na cozinha com Câmara Cascudo história, etnografia e folclore nos estudos da alimentação no Brasil</a></li>

          <li><a href='assets/arquivos/Narrativas e memória indígena na Cidade dos Veados.pdf' download="Narrativas e memória indígena na Cidade dos Veados.pdf">Narrativas e memória indígena na Cidade dos Veados</a></li>

          <li><a href='assets/arquivos/NOTAS SOBRE O INÍCIO DO POVOAMENTO FAZENDA PITOMBEIRA.pdf' download="NOTAS SOBRE O INÍCIO DO POVOAMENTO FAZENDA PITOMBEIRA.pdf">NOTAS SOBRE O INÍCIO DO POVOAMENTO FAZENDA PITOMBEIRA</a></li>

          <li><a href='assets/arquivos/Os_Filhos_de_Tereza.pdf' download="Os_Filhos_de_Tereza.pdf">Os Filhos de Tereza</a></li>

          <li><a href='assets/arquivos/Os fios da memória - presença afro-brasileira em Acari no tempo do algodão.pdf' download="Os fios da memória - presença afro-brasileira em Acari no tempo do algodão.pdf">Os fios da memória - presença afro-brasileira em Acari no tempo do algodão</a></li>

          <li><a href='assets/arquivos/O zambê é nossa cultura - o coco de zambê e a emergência étnica em Sibaúma.pdf' download="O zambê é nossa cultura - o coco de zambê e a emergência étnica em Sibaúma.pdf">O zambê é nossa cultura - o coco de zambê e a emergência étnica em Sibaúma</a></li>

          <li><a href='assets/arquivos/pitombeira fazendas do acari.pdf' download="pitombeira fazendas do acari.pdf">Pitombeira fazendas do acari</a></li>

          <li><a href='assets/arquivos/Quilombo_Miolo_Revisao1.pdf' download="Quilombo_Miolo_Revisao1.pdf">Quilombo Miolo</a></li>

          <li><a href='assets/arquivos/Sabores e práticas das cozinheiras negras do Seridó.pdf' download="Sabores e práticas das cozinheiras negras do Seridó.pdf">Sabores e práticas das cozinheiras negras do Seridó</a></li>

          <li><a href='assets/arquivos/Tese_helder_macedo_versao_final_apos_defesa.pdf' download="Tese_helder_macedo_versao_final_apos_defesa.pdf">Tese helder macedo versao final apos defesa</a></li>

          <li><a href='assets/arquivos/Tronco, Ramos e  Raizes (livro digital).pdf' download="Tronco, Ramos e  Raizes (livro digital).pdf">Tronco, Ramos e  Raizes (livro digital)</a></li>

          <li><a href='assets/arquivos/Um rastro de memória - terra parentesco e oficios na familia belem em Acari-RN.pdf' download="Um rastro de memória - terra parentesco e oficios na familia belem em Acari-RN.pdf">Um rastro de memória - terra parentesco e oficios na familia belem em Acari-RN</a></li>

          <li><a href='assets/arquivos/Viajando o Sertao - Luis da Camara Cascudo.pdf' download="Viajando o Sertao - Luis da Camara Cascudo.pdf">Viajando o Sertao - Luis da Camara Cascudo</a></li>

          <li><a href='assets/arquivos/Vozes da Tradição_1999.pdf' download="Vozes da Tradição_1999.pdf">Vozes da Tradição - 1999</a></li>
        </ul>
      </div>
      
      <div className="footer-div">
        <Footer/>
      </div>
    </>
  )
}