import React, { useState } from 'react';
import './gallery.css';
import { AiFillCloseCircle } from "react-icons/ai";
import Navbar from '../../components/Navbar/navbar';
import Footer from "../../components/Footer/footer";
import Img1 from '../../files/images/img1.jpg'
import Img2 from '../../files/images/img2.jpg'
import Img3 from '../../files/images/img3.jpg'
import Img4 from '../../files/images/img4.jpg'
import Img5 from '../../files/images/img5.jpg'
import Img6 from '../../files/images/img6.jpg'
import Img7 from '../../files/images/img7.jpg'
import Img8 from '../../files/images/img8.jpg'
import Img9 from '../../files/images/img9.jpg'
import Img10 from '../../files/images/img10.jpg'
import Img11 from '../../files/images/img11.jpg'

export default function Gallery() {

    let data = [
        {
        id:1,
        imgSrc: Img1,
        description: 'O Rio Grande do Norte é conhecido pelo seu folclore, com as obras de Luis da Câmara Cascudo e de Mário de Andrade. Hoje, prefere-se designar como patrimônio imaterial as práticas sociais coletivas, como as festas e as celebrações, as formas de expressão cênicas, plásticas, musicais ou lúdicas e os saberes transmitidos de geração em geração (os ofício,s as técnicas e modos de fazer). Os povos tradicionais e seus mestres, poetas e contadores de história, artesões, rabequeiros, rezadeiras e curandeiros, cozinheiras são os detentores desse patrimônio pouco valorizado. As festas, como as da irmandade do Rosário no Seridó, as brincadeiras e as danças, têm um atrativo especial por nos mostrar que esses saberes da tradição são muito vivos.'
        },
        {
        id:2,
        imgSrc: Img2,
        description: 'teste2'
        },
        {
        id:3,
        imgSrc: Img3,
        description: 'beiçano'
        },
        {
        id:4,
        imgSrc: Img4,
        description: 'beiçano'
        },
        {
        id:5,
        imgSrc: Img5,
        description: 'beiçano'
        },
        {
        id:6,
        imgSrc: Img6,
        description: 'beiçano'
        },
        {
        id:7,
        imgSrc: Img7,
        description: 'beiçano'
        },
        {
        id:8,
        imgSrc: Img8,
        description: 'beiçano'
        },
        {
        id:9,
        imgSrc: Img9,
        description: 'beiçano'
        },
        {
        id:10,
        imgSrc: Img10,
        description: 'beiçano'
        },
        {
        id:11,
        imgSrc: Img11,
        description: 'beiçano'
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const [description, setDescription] = useState('')

    const getImg = (item) => {
        setTempImgSrc(item.imgSrc);
        setDescription(item.description);
        setModel(true);
    }

    return (
        <>
        <Navbar/>
        <div className={model? "model open":"model"}>
            <div className='contentModel'>
                <img src={tempImgSrc} />
                <p align="justify">{description}</p>
            </div>
            <AiFillCloseCircle onClick={()=> setModel(false)}/>
        </div>
        <div className='gallery'>
            {
                data.map((item, index)=>{
                    return(
                        <div className='photos' key={index} onClick ={() => getImg(item)} >
                            <img src={item.imgSrc} style={{width:'100%'}}/>
                        </div>
                    )
                })
            }
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </>
        
    )
}