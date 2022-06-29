import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselItem() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Quilombolas</h3>
            <p>O Rio Grande do Norte possui mais de sessenta comunidades quilombolas mapeadas. Destas, cerca de trinta e três são reconhecidas pela Fundação Cultural Palmares e apenas uma (Jatoba, municipio de Patu) teve o seu título coletivo reconhecido. Os territórios quilombolas são distribuídos em todas as regiões do estado, geralmente localizados nas terras devolutas ou em terras que não tinham, até pouco tempo, um alto valor comercial. As comunidades negras, com suas trajetórias históricas próprias, são percebidas pelos seus moradores como lugares de ancestralidade e de tradição..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Indígenas</h3>
            <p>Os Povos Indígenas do Rio Grande do Norte iniciaram afirmação de sua identidade étnica a partir dos anos 2000. No ano de 2005, foi realizada a primeira audiência pública em âmbito estadual. Na ocasião três comunidades se apresentaram publicamente como indígenas: Catu dos Eleotérios; Mendonça do Amarelão; Caboclos do Assu. Passados mais de 15 anos desse marco, são reconhecidos e acompanhados pelo órgão oficial (Funai) seis povos indígenas do Rio Grande do Norte: Caboclos do Assu; Potiguara do Catu; Potiguara do Sagi/Trabanda; Potiguara Mendonça; Tapuia Paiacu; Tapuia. As lideranças desses grupos seguem mobilizadas em luta pela garantia dos direitos constitucionais. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Monumentos</h3>
            <p>Os monumentos encontrados no Rio Grande do Norte conservam as marcas da presença e da atuação de grupos e sujeitos que tiveram suas histórias e memórias apagadas ou encobertas. Assim, igrejas, casas de câmara e cadeia, fazendas e antigos currais, engenhos, casas das irmandades negras, taperas, cemitérios e sepulturas, etc. atestam das formas de vida, do trabalho, da religiosidade e das resistências de personagens marginalizados: negros, mestiços, índios e ciganos. Mesmo escravizados e explorados, souberam aproveitar as possibilidades abertas pelas circunstâncias históricas, criando meios de sobrevivência para suas famílias. Mantiveram, mesmo que no âmbito restrito, suas memórias negadas pelos discursos elitistas; essas aparecem, nem sempre muito visíveis, nos monumentos históricos que construiram.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Sitios Aquerológicos</h3>
            <p>Os monumentos encontrados no Rio Grande do Norte conservam as marcas da presença e da atuação de grupos e sujeitos que tiveram suas histórias e memórias apagadas ou encobertas. Assim, igrejas, casas de câmara e cadeia, fazendas e antigos currais, engenhos, casas das irmandades negras, taperas, cemitérios e sepulturas, etc. atestam das formas de vida, do trabalho, da religiosidade e das resistências de personagens marginalizados: negros, mestiços, índios e ciganos. Mesmo escravizados e explorados, souberam aproveitar as possibilidades abertas pelas circunstâncias históricas, criando meios de sobrevivência para suas famílias. Mantiveram, mesmo que no âmbito restrito, suas memórias negadas pelos discursos elitistas; essas aparecem, nem sempre muito visíveis, nos monumentos históricos que construiram.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/5.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Lugares</h3>
            <p>Os lugares de memória são marcas de um passado inscrito na paisagem, materializam o esquecimento e o apagamento da história dos que perderam as guerras. As serras, rios, vales e grutas carregam a lembrança de eventos que foram apagados mas que resistem, às vezes, apenas na lembrança dos moradores do lugar, numa marca na paisagem ou através dos topônimos. Essa história, mesmo sem ser inteligível, resiste na memória e testemunha de acontecimentos violentos, espoliações de terra, aprisionamentos, assassinatos. A natureza conserva na sua concretude a memória trágica dos fatos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://web-tronco-ramos-e-raizes.vercel.app/assets/img/carousel/6.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Patrimônio imaterial</h3>
            <p>O Rio Grande do Norte é conhecido pelo seu folclore, com as obras de Luis da Câmara Cascudo e de Mário de Andrade. Hoje, prefere-se designar como patrimônio imaterial as práticas sociais coletivas, como as festas e as celebrações, as formas de expressão cênicas, plásticas, musicais ou lúdicas e os saberes transmitidos de geração em geração (os ofício,s as técnicas e modos de fazer). Os povos tradicionais e seus mestres, poetas e contadores de história, artesões, rabequeiros, rezadeiras e curandeiros, cozinheiras são os detentores desse patrimônio pouco valorizado. As festas, como as da irmandade do Rosário no Seridó, as brincadeiras e as danças, têm um atrativo especial por nos mostrar que esses saberes da tradição são muito vivos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}