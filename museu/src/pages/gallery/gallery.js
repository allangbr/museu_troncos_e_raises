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

import Img1_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img1.jpg'
import Img2_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img2.jpg'
import Img3_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img3.jpg'
import Img4_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img4.jpg'
import Img5_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img5.jpg'
import Img6_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img6.jpg'
import Img7_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img7.jpg'
import Img8_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img8.jpg'
import Img9_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img9.jpg'
import Img10_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img10.jpg'
import Img11_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img11.jpg'
import Img12_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img12.jpg'
import Img13_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img13.jpg'
import Img14_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img14.jpg'
import Img15_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img15.jpg'
import Img16_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img16.jpg'
import Img17_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img17.jpg'
import Img18_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img18.jpg'
import Img19_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img19.jpg'
import Img20_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img20.jpg'
import Img21_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img21.jpg'
import Img22_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img22.jpg'
import Img23_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img23.jpg'
import Img24_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img24.jpg'
import Img25_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img25.jpg'
import Img26_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img26.jpg'
import Img27_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img27.jpg'
import Img28_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img28.jpg'
import Img29_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img29.jpg'
import Img30_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img30.jpg'
import Img31_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img31.jpg'
import Img32_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img32.jpg'
import Img33_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img33.jpg'
import Img34_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img34.jpg'
import Img35_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img35.jpg'
import Img36_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img36.jpg'
import Img37_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img37.jpg'
import Img38_pasta05 from '../../files/images/Oficina Irmandades do ROsário do Seridó - 26 de Agosto 2012/img38.jpg'

import Img1_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img1.jpg'
import Img2_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img2.jpg'
import Img3_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img3.jpg'
import Img4_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img4.jpg'
import Img5_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img5.jpg'
import Img6_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img6.jpg'
import Img7_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img7.jpg'
import Img8_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img8.jpg'
import Img9_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img9.jpg'
import Img10_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img10.jpg'
import Img11_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img11.jpg'
import Img12_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img12.jpg'
import Img13_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img13.jpg'
import Img14_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img14.jpg'
import Img15_pasta06 from '../../files/images/Oficina Estudo de Movimentos Afro com Prof. Monica/img15.jpg'

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
        {
        id:31,
        imgSrc: Img1_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:32,
        imgSrc: Img2_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:33,
        imgSrc: Img3_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:34,
        imgSrc: Img4_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:35,
        imgSrc: Img5_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:36,
        imgSrc: Img6_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:37,
        imgSrc: Img7_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:38,
        imgSrc: Img8_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:39,
        imgSrc: Img9_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:40,
        imgSrc: Img10_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:41,
        imgSrc: Img11_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:42,
        imgSrc: Img12_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:43,
        imgSrc: Img13_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:44,
        imgSrc: Img14_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:45,
        imgSrc: Img15_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:46,
        imgSrc: Img16_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:47,
        imgSrc: Img17_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:48,
        imgSrc: Img18_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:49,
        imgSrc: Img19_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:50,
        imgSrc: Img20_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:51,
        imgSrc: Img21_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:52,
        imgSrc: Img22_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:53,
        imgSrc: Img23_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:54,
        imgSrc: Img24_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:55,
        imgSrc: Img25_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:56,
        imgSrc: Img26_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:57,
        imgSrc: Img27_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:58,
        imgSrc: Img28_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:59,
        imgSrc: Img29_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:60,
        imgSrc: Img30_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:61,
        imgSrc: Img31_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:62,
        imgSrc: Img32_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:63,
        imgSrc: Img33_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:64,
        imgSrc: Img34_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:65,
        imgSrc: Img35_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:66,
        imgSrc: Img36_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:67,
        imgSrc: Img37_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:68,
        imgSrc: Img38_pasta05,
        description: 'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
        },
        {
        id:69,
        imgSrc: Img1_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:70,
        imgSrc: Img2_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:71,
        imgSrc: Img3_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:72,
        imgSrc: Img4_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:73,
        imgSrc: Img5_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:74,
        imgSrc: Img6_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:75,
        imgSrc: Img7_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:76,
        imgSrc: Img8_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:77,
        imgSrc: Img9_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:78,
        imgSrc: Img10_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:79,
        imgSrc: Img11_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:80,
        imgSrc: Img12_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:81,
        imgSrc: Img13_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:82,
        imgSrc: Img14_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
        },
        {
        id:83,
        imgSrc: Img15_pasta06,
        description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
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