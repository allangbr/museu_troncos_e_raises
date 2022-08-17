import React, { useState } from 'react';
import './gallery.css';
import { AiFillCloseCircle } from "react-icons/ai";
import Navbar from '../../components/Navbar/navbar';
import Footer from "../../components/Footer/footer";

import Img1_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img1.jpg'
import Img2_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img2.jpg'
import Img3_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img3.jpg'
import Img4_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img4.jpg'
import Img5_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img5.jpg'
import Img6_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img6.jpg'
import Img7_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img7.jpg'
import Img8_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img8.jpg'
import Img9_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img9.jpg'
import Img10_pasta01 from '../../files/images/Seminário de encerramento do curso Educação para as Relações Etnico-Raciais/img10.jpg'

import Img1_pasta02 from '../../files/images/Seminário Conexões - IBRAM/img1.jpg'
import Img2_pasta02 from '../../files/images/Seminário Conexões - IBRAM/img2.jpg'
import Img3_pasta02 from '../../files/images/Seminário Conexões - IBRAM/img3.jpg'
import Img4_pasta02 from '../../files/images/Seminário Conexões - IBRAM/img4.jpg'
import Img5_pasta02 from '../../files/images/Seminário Conexões - IBRAM/img5.jpg'
import Img6_pasta02 from '../../files/images/Seminário Conexões - IBRAM/img6.jpg'

import Img1_pasta03 from '../../files/images/Sagi - Alix Macadré  2017/img1.jpg'
import Img2_pasta03 from '../../files/images/Sagi - Alix Macadré  2017/img2.jpg'
import Img3_pasta03 from '../../files/images/Sagi - Alix Macadré  2017/img3.jpg'
import Img4_pasta03 from '../../files/images/Sagi - Alix Macadré  2017/img4.jpg'

import Img1_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img1.jpg'
import Img2_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img2.jpg'
import Img3_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img3.jpg'
import Img4_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img4.jpg'
import Img5_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img5.jpg'
import Img6_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img6.jpg'
import Img7_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img7.jpg'
import Img8_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img8.jpg'
import Img9_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img9.jpg'
import Img10_pasta04 from '../../files/images/Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013)/img10.jpg'

export default function Gallery() {

    let data = [
        {
        id:1,
        imgSrc: Img1_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:2,
        imgSrc: Img2_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:3,
        imgSrc: Img3_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:4,
        imgSrc: Img4_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:5,
        imgSrc: Img5_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:6,
        imgSrc: Img6_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:7,
        imgSrc: Img7_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:8,
        imgSrc: Img8_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:9,
        imgSrc: Img9_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:10,
        imgSrc: Img10_pasta01,
        description: 'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
        },
        {
        id:11,
        imgSrc: Img1_pasta02,
        description: 'Seminário Conexões - IBRAM.'
        },
        {
        id:12,
        imgSrc: Img2_pasta02,
        description: 'Seminário Conexões - IBRAM.'
        },
        {
        id:13,
        imgSrc: Img3_pasta02,
        description: 'Seminário Conexões - IBRAM.'
        },
        {
        id:14,
        imgSrc: Img4_pasta02,
        description: 'Seminário Conexões - IBRAM.'
        },
        {
        id:15,
        imgSrc: Img5_pasta02,
        description: 'Seminário Conexões - IBRAM.'
        },
        {
        id:16,
        imgSrc: Img6_pasta02,
        description: 'Seminário Conexões - IBRAM.'
        },
        {
        id:17,
        imgSrc: Img1_pasta03,
        description: 'Sagi - Alix Macadré  2017.'
        },
        {
        id:18,
        imgSrc: Img2_pasta03,
        description: 'Sagi - Alix Macadré  2017.'
        },
        {
        id:19,
        imgSrc: Img3_pasta03,
        description: 'Sagi - Alix Macadré  2017.'
        },
        {
        id:20,
        imgSrc: Img4_pasta03,
        description: 'Sagi - Alix Macadré  2017.'
        },
        {
        id:21,
        imgSrc: Img1_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:22,
        imgSrc: Img2_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:23,
        imgSrc: Img3_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:24,
        imgSrc: Img4_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:25,
        imgSrc: Img5_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:26,
        imgSrc: Img6_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:27,
        imgSrc: Img7_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:28,
        imgSrc: Img8_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:29,
        imgSrc: Img9_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
        },
        {
        id:30,
        imgSrc: Img10_pasta04,
        description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
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