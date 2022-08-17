import React, { useState } from 'react';
import './gallery.css';
import { AiFillCloseCircle } from "react-icons/ai";
import Navbar from '../../components/Navbar/navbar';
import Footer from "../../components/Footer/footer";
import Img1 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img1.jpg'
import Img2 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img2.jpg'
import Img3 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img3.jpg'
import Img4 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img4.jpg'
import Img5 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img5.jpg'
import Img6 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img6.jpg'
import Img7 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img7.jpg'
import Img8 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img8.jpg'
import Img9 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img9.jpg'
import Img10 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img10.jpg'

export default function Gallery() {

    let data = [
        {
        id:1,
        imgSrc: Img1,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:2,
        imgSrc: Img2,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:3,
        imgSrc: Img3,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:4,
        imgSrc: Img4,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:5,
        imgSrc: Img5,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:6,
        imgSrc: Img6,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:7,
        imgSrc: Img7,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:8,
        imgSrc: Img8,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:9,
        imgSrc: Img9,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
        },
        {
        id:10,
        imgSrc: Img10,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais'
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