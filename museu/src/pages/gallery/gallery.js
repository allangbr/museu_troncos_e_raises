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

import Img1_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img1.jpg'
import Img2_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img2.jpg'
import Img3_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img3.jpg'
import Img4_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img4.jpg'
import Img5_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img5.jpg'
import Img6_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img6.jpg'
import Img7_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img7.jpg'
import Img8_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img8.jpg'
import Img9_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img9.jpg'
import Img10_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img10.jpg'
import Img11_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img11.jpg'
import Img12_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img12.jpg'
import Img13_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img13.jpg'
import Img14_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img14.jpg'
import Img15_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img15.jpg'
import Img16_pasta07 from '../../files/images/Oficina de Cabelos Afro - Professora Manuella/img16.jpg'

import Img1_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img1.jpg'
import Img2_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img2.jpg'
import Img3_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img3.jpg'
import Img4_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img4.jpg'
import Img5_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img5.jpg'
import Img6_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img6.jpg'
import Img7_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img7.jpg'
import Img8_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img8.jpg'
import Img9_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img9.jpg'
import Img10_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img10.jpg'
import Img11_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img11.jpg'
import Img12_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img12.jpg'
import Img13_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img13.jpg'
import Img14_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img14.jpg'
import Img15_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img15.jpg'
import Img16_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img16.jpg'
import Img17_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img17.jpg'
import Img18_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img18.jpg'
import Img19_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img19.jpg'
import Img20_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img20.jpg'
import Img21_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img21.jpg'
import Img22_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img22.jpg'
import Img23_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img23.jpg'
import Img24_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img24.jpg'
import Img25_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img25.jpg'
import Img26_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img26.jpg'
import Img27_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img27.jpg'
import Img28_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img28.jpg'
import Img29_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img29.jpg'
import Img30_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img30.jpg'
import Img31_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img31.jpg'
import Img32_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img32.jpg'
import Img33_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img33.jpg'
import Img34_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img34.jpg'
import Img35_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img35.jpg'
import Img36_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img36.jpg'
import Img37_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img37.jpg'
import Img38_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img38.jpg'
import Img39_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img39.jpg'
import Img40_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img40.jpg'
import Img41_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img41.jpg'
import Img42_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img42.jpg'
import Img43_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img43.jpg'
import Img44_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img44.jpg'
import Img45_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img45.jpg'
import Img46_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img46.jpg'
import Img47_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img47.jpg'
import Img48_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img48.jpg'
import Img49_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img49.jpg'
import Img50_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img50.jpg'
import Img51_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img51.jpg'
import Img52_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img52.jpg'
import Img53_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img53.jpg'
import Img54_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img54.jpg'
import Img55_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img55.jpg'
import Img56_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img56.jpg'
import Img57_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img57.jpg'
import Img58_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img58.jpg'
import Img59_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img59.jpg'
import Img60_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img60.jpg'
import Img61_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img61.jpg'
import Img62_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img62.jpg'
import Img63_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img63.jpg'
import Img64_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img64.jpg'
import Img65_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img65.jpg'
import Img66_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img66.jpg'
import Img67_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img67.jpg'
import Img68_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img68.jpg'
import Img69_pasta08 from '../../files/images/Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó/img69.jpg'

import Img1_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img1.jpg'
import Img2_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img2.jpg'
import Img3_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img3.jpg'
import Img4_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img4.jpg'
import Img5_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img5.jpg'
import Img6_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img6.jpg'
import Img7_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img7.jpg'
import Img8_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img8.jpg'
import Img9_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img9.jpg'
import Img10_pasta09 from '../../files/images/Oficina audiovisual com Cécili Chagnaud (Parelhas)/img10.jpg'

import Img1_pasta10 from '../../files/images/Oficina AC Jr 2013/img1.jpg'
import Img2_pasta10 from '../../files/images/Oficina AC Jr 2013/img2.jpg'
import Img3_pasta10 from '../../files/images/Oficina AC Jr 2013/img3.jpg'
import Img4_pasta10 from '../../files/images/Oficina AC Jr 2013/img4.jpg'
import Img5_pasta10 from '../../files/images/Oficina AC Jr 2013/img5.jpg'
import Img6_pasta10 from '../../files/images/Oficina AC Jr 2013/img6.jpg'
import Img7_pasta10 from '../../files/images/Oficina AC Jr 2013/img7.jpg'

import Img1_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img1.jpg'
import Img2_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img2.jpg'
import Img3_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img3.jpg'
import Img4_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img4.jpg'
import Img5_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img5.jpg'
import Img6_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img6.jpg'
import Img7_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img7.jpg'
import Img8_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img8.jpg'
import Img9_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img9.jpg'
import Img10_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img10.jpg'
import Img11_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img11.jpg'
import Img12_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img12.jpg'
import Img13_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img13.jpg'
import Img14_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img14.jpg'
import Img15_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img15.jpg'
import Img16_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img16.jpg'
import Img17_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img17.jpg'
import Img18_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img18.jpg'
import Img19_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img19.jpg'
import Img20_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img20.jpg'
import Img21_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img21.jpg'
import Img22_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img22.jpg'
import Img23_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img23.jpg'
import Img24_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img24.jpg'
import Img25_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img25.jpg'
import Img26_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img26.jpg'
import Img27_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img27.jpg'
import Img28_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img28.jpg'
import Img29_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img29.jpg'
import Img30_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img30.jpg'
import Img31_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img31.jpg'
import Img32_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img32.jpg'
import Img33_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img33.jpg'
import Img34_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img34.jpg'
import Img35_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img35.jpg'
import Img36_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img36.jpg'
import Img37_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img37.jpg'
import Img38_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img38.jpg'
import Img39_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img39.jpg'
import Img40_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img40.jpg'
import Img41_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img41.jpg'
import Img42_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img42.jpg'
import Img43_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img43.jpg'
import Img44_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img44.jpg'
import Img45_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img45.jpg'
import Img46_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img46.jpg'
import Img47_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img47.jpg'
import Img48_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img48.jpg'
import Img49_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img49.jpg'
import Img50_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img50.jpg'
import Img51_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img51.jpg'
import Img52_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img52.jpg'
import Img53_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img53.jpg'
import Img54_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img54.jpg'
import Img55_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img55.jpg'
import Img56_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img56.jpg'
import Img57_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img57.jpg'
import Img58_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img58.jpg'
import Img59_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img59.jpg'
import Img60_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img60.jpg'
import Img61_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img61.jpg'
import Img62_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img62.jpg'
import Img63_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img63.jpg'
import Img64_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img64.jpg'
import Img65_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img65.jpg'
import Img66_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img66.jpg'
import Img67_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img67.jpg'
import Img68_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img68.jpg'
import Img69_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img69.jpg'
import Img70_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img70.jpg'
import Img71_pasta11 from '../../files/images/I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS/img71.jpg'

import Img1_pasta12 from '../../files/images/Fotos no livro/img1.jpg'
import Img2_pasta12 from '../../files/images/Fotos no livro/img2.jpg'

import Img1_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img1.jpg'
import Img2_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img2.jpg'
import Img3_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img3.jpg'
import Img4_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img4.jpg'
import Img5_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img5.jpg'
import Img6_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img6.jpg'
import Img7_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img7.jpg'
import Img8_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img8.jpg'
import Img9_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img9.jpg'
import Img10_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img10.jpg'
import Img11_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img11.jpg'
import Img12_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img12.jpg'
import Img13_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img13.jpg'
import Img14_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img14.jpg'
import Img15_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img15.jpg'
import Img16_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img16.jpg'
import Img17_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img17.jpg'
import Img18_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img18.jpg'
import Img19_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img19.jpg'
import Img20_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img20.jpg'
import Img21_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img21.jpg'
import Img22_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img22.jpg'
import Img23_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img23.jpg'
import Img24_pasta13 from '../../files/images/Fotos do Albúm de D. Viturina/img24.jpg'

import Img1_pasta14 from '../../files/images/fotos antigas/img1.jpg'
import Img2_pasta14 from '../../files/images/fotos antigas/img2.jpg'
import Img3_pasta14 from '../../files/images/fotos antigas/img3.jpg'
import Img4_pasta14 from '../../files/images/fotos antigas/img4.jpg'
import Img5_pasta14 from '../../files/images/fotos antigas/img5.jpg'
import Img6_pasta14 from '../../files/images/fotos antigas/img6.jpg'
import Img7_pasta14 from '../../files/images/fotos antigas/img7.jpg'
import Img8_pasta14 from '../../files/images/fotos antigas/img8.jpg'
import Img9_pasta14 from '../../files/images/fotos antigas/img9.jpg'
import Img10_pasta14 from '../../files/images/fotos antigas/img10.jpg'
import Img11_pasta14 from '../../files/images/fotos antigas/img11.jpg'
import Img12_pasta14 from '../../files/images/fotos antigas/img12.jpg'
import Img13_pasta14 from '../../files/images/fotos antigas/img13.jpg'
import Img14_pasta14 from '../../files/images/fotos antigas/img14.jpg'

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
        {
        id:84,
        imgSrc: Img1_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:85,
        imgSrc: Img2_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:86,
        imgSrc: Img3_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:87,
        imgSrc: Img4_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:88,
        imgSrc: Img5_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:89,
        imgSrc: Img6_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:90,
        imgSrc: Img7_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:91,
        imgSrc: Img8_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:92,
        imgSrc: Img9_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:93,
        imgSrc: Img10_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:94,
        imgSrc: Img11_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:95,
        imgSrc: Img12_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:96,
        imgSrc: Img13_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:97,
        imgSrc: Img14_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:98,
        imgSrc: Img15_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:99,
        imgSrc: Img16_pasta07,
        description: 'Oficina de Cabelos Afro - Professora Manuella.'
        },
        {
        id:100,
        imgSrc: Img1_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:101,
        imgSrc: Img2_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:102,
        imgSrc: Img3_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:103,
        imgSrc: Img4_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:104,
        imgSrc: Img5_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:105,
        imgSrc: Img6_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:106,
        imgSrc: Img7_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:107,
        imgSrc: Img8_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:108,
        imgSrc: Img9_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:109,
        imgSrc: Img10_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:110,
        imgSrc: Img11_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:111,
        imgSrc: Img12_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:112,
        imgSrc: Img13_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:113,
        imgSrc: Img14_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:114,
        imgSrc: Img15_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:115,
        imgSrc: Img16_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:116,
        imgSrc: Img17_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:117,
        imgSrc: Img18_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:118,
        imgSrc: Img19_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:119,
        imgSrc: Img20_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:120,
        imgSrc: Img21_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:121,
        imgSrc: Img22_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:122,
        imgSrc: Img23_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:123,
        imgSrc: Img24_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:124,
        imgSrc: Img25_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:125,
        imgSrc: Img26_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:126,
        imgSrc: Img27_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:127,
        imgSrc: Img28_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:128,
        imgSrc: Img29_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:129,
        imgSrc: Img30_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:130,
        imgSrc: Img31_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:131,
        imgSrc: Img32_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:132,
        imgSrc: Img33_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:133,
        imgSrc: Img34_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:134,
        imgSrc: Img35_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:135,
        imgSrc: Img36_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:136,
        imgSrc: Img37_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:137,
        imgSrc: Img38_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:138,
        imgSrc: Img39_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:139,
        imgSrc: Img40_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:140,
        imgSrc: Img41_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:141,
        imgSrc: Img42_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:142,
        imgSrc: Img43_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:143,
        imgSrc: Img44_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:144,
        imgSrc: Img45_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:145,
        imgSrc: Img46_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:146,
        imgSrc: Img47_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:147,
        imgSrc: Img48_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:148,
        imgSrc: Img49_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:149,
        imgSrc: Img50_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:150,
        imgSrc: Img51_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:151,
        imgSrc: Img52_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:152,
        imgSrc: Img53_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:153,
        imgSrc: Img54_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:154,
        imgSrc: Img55_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:155,
        imgSrc: Img56_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:156,
        imgSrc: Img57_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:157,
        imgSrc: Img58_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:158,
        imgSrc: Img59_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:159,
        imgSrc: Img60_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:160,
        imgSrc: Img61_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:161,
        imgSrc: Img62_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:162,
        imgSrc: Img63_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:163,
        imgSrc: Img64_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:164,
        imgSrc: Img65_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:165,
        imgSrc: Img66_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:166,
        imgSrc: Img67_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:167,
        imgSrc: Img68_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:168,
        imgSrc: Img69_pasta08,
        description: 'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
        },
        {
        id:169,
        imgSrc: Img1_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:170,
        imgSrc: Img2_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:171,
        imgSrc: Img3_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:172,
        imgSrc: Img4_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:173,
        imgSrc: Img5_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:174,
        imgSrc: Img6_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:175,
        imgSrc: Img7_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:176,
        imgSrc: Img8_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:177,
        imgSrc: Img9_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:178,
        imgSrc: Img10_pasta09,
        description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
        },
        {
        id:179,
        imgSrc: Img1_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:180,
        imgSrc: Img2_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:181,
        imgSrc: Img3_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:182,
        imgSrc: Img4_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:183,
        imgSrc: Img5_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:184,
        imgSrc: Img6_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:185,
        imgSrc: Img7_pasta10,
        description: 'Oficina AC Jr 2013.'
        },
        {
        id:186,
        imgSrc: Img1_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:187,
        imgSrc: Img2_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:188,
        imgSrc: Img3_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:189,
        imgSrc: Img4_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:190,
        imgSrc: Img5_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:191,
        imgSrc: Img6_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:192,
        imgSrc: Img7_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:193,
        imgSrc: Img8_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:194,
        imgSrc: Img9_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:195,
        imgSrc: Img10_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:196,
        imgSrc: Img11_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:197,
        imgSrc: Img12_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:198,
        imgSrc: Img13_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:199,
        imgSrc: Img14_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:200,
        imgSrc: Img15_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:201,
        imgSrc: Img16_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:201,
        imgSrc: Img17_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:202,
        imgSrc: Img18_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:203,
        imgSrc: Img19_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:204,
        imgSrc: Img20_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:205,
        imgSrc: Img21_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:206,
        imgSrc: Img22_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:207,
        imgSrc: Img23_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:208,
        imgSrc: Img24_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:209,
        imgSrc: Img25_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:210,
        imgSrc: Img26_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:211,
        imgSrc: Img27_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:212,
        imgSrc: Img28_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:213,
        imgSrc: Img29_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:214,
        imgSrc: Img30_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:215,
        imgSrc: Img31_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:216,
        imgSrc: Img32_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:217,
        imgSrc: Img33_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:218,
        imgSrc: Img34_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:219,
        imgSrc: Img35_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:220,
        imgSrc: Img36_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:221,
        imgSrc: Img37_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:222,
        imgSrc: Img38_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:223,
        imgSrc: Img39_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:224,
        imgSrc: Img40_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:225,
        imgSrc: Img41_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:226,
        imgSrc: Img42_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:227,
        imgSrc: Img43_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:228,
        imgSrc: Img44_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:229,
        imgSrc: Img45_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:230,
        imgSrc: Img46_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:231,
        imgSrc: Img47_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:232,
        imgSrc: Img48_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:233,
        imgSrc: Img49_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:234,
        imgSrc: Img50_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:235,
        imgSrc: Img51_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:236,
        imgSrc: Img52_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:237,
        imgSrc: Img53_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:238,
        imgSrc: Img54_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:239,
        imgSrc: Img55_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:240,
        imgSrc: Img56_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:241,
        imgSrc: Img57_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:242,
        imgSrc: Img58_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:243,
        imgSrc: Img59_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:244,
        imgSrc: Img60_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:245,
        imgSrc: Img61_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:246,
        imgSrc: Img62_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:247,
        imgSrc: Img63_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:248,
        imgSrc: Img64_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:249,
        imgSrc: Img65_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:250,
        imgSrc: Img66_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:251,
        imgSrc: Img67_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:252,
        imgSrc: Img68_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:253,
        imgSrc: Img69_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:254,
        imgSrc: Img70_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:255,
        imgSrc: Img71_pasta11,
        description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
        },
        {
        id:256,
        imgSrc: Img1_pasta12,
        description: 'Fotos no livro.'
        },
        {
        id:257,
        imgSrc: Img2_pasta12,
        description: 'Fotos no livro.'
        },
        {
        id:258,
        imgSrc: Img1_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:259,
        imgSrc: Img2_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:260,
        imgSrc: Img3_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:261,
        imgSrc: Img4_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:262,
        imgSrc: Img5_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:263,
        imgSrc: Img6_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:264,
        imgSrc: Img7_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:265,
        imgSrc: Img8_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:266,
        imgSrc: Img9_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:267,
        imgSrc: Img10_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:268,
        imgSrc: Img11_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:269,
        imgSrc: Img12_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:270,
        imgSrc: Img13_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:271,
        imgSrc: Img14_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:272,
        imgSrc: Img15_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:273,
        imgSrc: Img16_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:274,
        imgSrc: Img17_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:275,
        imgSrc: Img18_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:276,
        imgSrc: Img19_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:277,
        imgSrc: Img20_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:278,
        imgSrc: Img21_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:279,
        imgSrc: Img22_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:280,
        imgSrc: Img23_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:281,
        imgSrc: Img24_pasta13,
        description: 'Fotos do Albúm de D. Viturina.'
        },
        {
        id:282,
        imgSrc: Img1_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:283,
        imgSrc: Img2_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:284,
        imgSrc: Img3_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:285,
        imgSrc: Img4_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:286,
        imgSrc: Img5_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:287,
        imgSrc: Img6_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:288,
        imgSrc: Img7_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:289,
        imgSrc: Img8_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:290,
        imgSrc: Img9_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:291,
        imgSrc: Img10_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:292,
        imgSrc: Img11_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:293,
        imgSrc: Img12_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:294,
        imgSrc: Img13_pasta14,
        description: 'Fotos Antigas.'
        },
        {
        id:295,
        imgSrc: Img14_pasta14,
        description: 'Fotos Antigas.'
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