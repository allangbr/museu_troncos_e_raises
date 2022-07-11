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
        },
        {
        id:2,
        imgSrc: Img2,
        },
        {
        id:3,
        imgSrc: Img3,
        },
        {
        id:4,
        imgSrc: Img4,
        },
        {
        id:5,
        imgSrc: Img5,
        },
        {
        id:6,
        imgSrc: Img6,
        },
        {
        id:7,
        imgSrc: Img7,
        },
        {
        id:8,
        imgSrc: Img8,
        },
        {
        id:9,
        imgSrc: Img9,
        },
        {
        id:10,
        imgSrc: Img10,
        },
        {
        id:11,
        imgSrc: Img11,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
        <Navbar/>
        <div className={model? "model open":"model"}>
            <img src={tempImgSrc} />
            <p>Os lugares de memória são marcas de um passado inscrito na paisagem, materializam o esquecimento e o apagamento da história dos que perderam as guerras. As serras, rios, vales e grutas carregam a lembrança de eventos que foram apagados mas que resistem, às vezes, apenas na lembrança dos moradores do lugar, numa marca na paisagem ou através dos topônimos. Essa história, mesmo sem ser inteligível, resiste na memória e testemunha de acontecimentos violentos, espoliações de terra, aprisionamentos, assassinatos. A natureza conserva na sua concretude a memória trágica dos fatos.</p>
            <AiFillCloseCircle onClick={()=> setModel(false)}/>
        </div>
        <div className='gallery'>
            {
                data.map((item, index)=>{
                    return(
                        <div className='photos' key={index} onClick ={() => getImg(item.imgSrc)} >
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