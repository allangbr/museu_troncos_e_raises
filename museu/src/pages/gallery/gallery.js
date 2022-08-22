import React, { useState } from 'react'
import './gallery.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'

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

import Img1_pasta10 from '../../files/images/oficina AC Jr 2013/img1.jpg'
import Img2_pasta10 from '../../files/images/oficina AC Jr 2013/img2.jpg'
import Img3_pasta10 from '../../files/images/oficina AC Jr 2013/img3.jpg'
import Img4_pasta10 from '../../files/images/oficina AC Jr 2013/img4.jpg'
import Img5_pasta10 from '../../files/images/oficina AC Jr 2013/img5.jpg'
import Img6_pasta10 from '../../files/images/oficina AC Jr 2013/img6.jpg'
import Img7_pasta10 from '../../files/images/oficina AC Jr 2013/img7.jpg'

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
import Img7_pasta14 from '../../files/images/fotos antigas/img7.JPG'
import Img8_pasta14 from '../../files/images/fotos antigas/img8.JPG'
import Img9_pasta14 from '../../files/images/fotos antigas/img9.jpg'
import Img10_pasta14 from '../../files/images/fotos antigas/img10.JPG'
import Img11_pasta14 from '../../files/images/fotos antigas/img11.JPG'
import Img12_pasta14 from '../../files/images/fotos antigas/img12.JPG'
import Img13_pasta14 from '../../files/images/fotos antigas/img13.jpg'
import Img14_pasta14 from '../../files/images/fotos antigas/img14.jpg'

import Img1_pasta15 from '../../files/images/fotos Ac/img1.jpg'
import Img2_pasta15 from '../../files/images/fotos Ac/img2.jpg'
import Img3_pasta15 from '../../files/images/fotos Ac/img3.JPG'
import Img4_pasta15 from '../../files/images/fotos Ac/img4.JPG'
import Img5_pasta15 from '../../files/images/fotos Ac/img5.jpg'
import Img6_pasta15 from '../../files/images/fotos Ac/img6.jpg'
import Img7_pasta15 from '../../files/images/fotos Ac/img7.jpg'
import Img8_pasta15 from '../../files/images/fotos Ac/img8.jpg'
import Img9_pasta15 from '../../files/images/fotos Ac/img9.jpg'
import Img10_pasta15 from '../../files/images/fotos Ac/img10.jpg'
import Img11_pasta15 from '../../files/images/fotos Ac/img11.jpg'
import Img12_pasta15 from '../../files/images/fotos Ac/img12.jpg'
import Img13_pasta15 from '../../files/images/fotos Ac/img13.jpg'

import Img1_pasta16 from '../../files/images/FotosAcJr/img1.jpg'
import Img2_pasta16 from '../../files/images/FotosAcJr/img2.jpg'
import Img3_pasta16 from '../../files/images/FotosAcJr/img3.jpg'
import Img4_pasta16 from '../../files/images/FotosAcJr/img4.jpg'
import Img5_pasta16 from '../../files/images/FotosAcJr/img5.jpg'
import Img6_pasta16 from '../../files/images/FotosAcJr/img6.jpg'
import Img7_pasta16 from '../../files/images/FotosAcJr/img7.jpg'
import Img8_pasta16 from '../../files/images/FotosAcJr/img8.jpg'
import Img9_pasta16 from '../../files/images/FotosAcJr/img9.jpg'
import Img10_pasta16 from '../../files/images/FotosAcJr/img10.jpg'
import Img11_pasta16 from '../../files/images/FotosAcJr/img11.jpg'
import Img12_pasta16 from '../../files/images/FotosAcJr/img12.jpg'
import Img13_pasta16 from '../../files/images/FotosAcJr/img13.jpg'
import Img14_pasta16 from '../../files/images/FotosAcJr/img14.jpg'
import Img15_pasta16 from '../../files/images/FotosAcJr/img15.jpg'
import Img16_pasta16 from '../../files/images/FotosAcJr/img16.jpg'
import Img17_pasta16 from '../../files/images/FotosAcJr/img17.jpg'
import Img18_pasta16 from '../../files/images/FotosAcJr/img18.jpg'
import Img19_pasta16 from '../../files/images/FotosAcJr/img19.jpg'
import Img20_pasta16 from '../../files/images/FotosAcJr/img20.jpg'
import Img21_pasta16 from '../../files/images/FotosAcJr/img21.jpg'
import Img22_pasta16 from '../../files/images/FotosAcJr/img22.jpg'
import Img23_pasta16 from '../../files/images/FotosAcJr/img23.jpg'
import Img24_pasta16 from '../../files/images/FotosAcJr/img24.jpg'
import Img25_pasta16 from '../../files/images/FotosAcJr/img25.jpg'
import Img26_pasta16 from '../../files/images/FotosAcJr/img26.jpg'
import Img27_pasta16 from '../../files/images/FotosAcJr/img27.jpg'
import Img28_pasta16 from '../../files/images/FotosAcJr/img28.jpg'
import Img29_pasta16 from '../../files/images/FotosAcJr/img29.jpg'
import Img30_pasta16 from '../../files/images/FotosAcJr/img30.jpg'
import Img31_pasta16 from '../../files/images/FotosAcJr/img31.jpg'

import Img1_pasta17 from '../../files/images/Oficina AC Junior/img1.jpg'
import Img2_pasta17 from '../../files/images/Oficina AC Junior/img2.jpg'
import Img3_pasta17 from '../../files/images/Oficina AC Junior/img3.jpg'
import Img4_pasta17 from '../../files/images/Oficina AC Junior/img4.jpg'
import Img5_pasta17 from '../../files/images/Oficina AC Junior/img5.jpg'
import Img6_pasta17 from '../../files/images/Oficina AC Junior/img6.jpg'
import Img7_pasta17 from '../../files/images/Oficina AC Junior/img7.jpg'
import Img8_pasta17 from '../../files/images/Oficina AC Junior/img8.jpg'
import Img9_pasta17 from '../../files/images/Oficina AC Junior/img9.jpg'
import Img10_pasta17 from '../../files/images/Oficina AC Junior/img10.jpg'
import Img11_pasta17 from '../../files/images/Oficina AC Junior/img11.jpg'
import Img12_pasta17 from '../../files/images/Oficina AC Junior/img12.jpg'
import Img13_pasta17 from '../../files/images/Oficina AC Junior/img13.jpg'
import Img14_pasta17 from '../../files/images/Oficina AC Junior/img14.jpg'
import Img15_pasta17 from '../../files/images/Oficina AC Junior/img15.jpg'
import Img16_pasta17 from '../../files/images/Oficina AC Junior/img16.jpg'
import Img17_pasta17 from '../../files/images/Oficina AC Junior/img17.jpg'
import Img18_pasta17 from '../../files/images/Oficina AC Junior/img18.jpg'
import Img19_pasta17 from '../../files/images/Oficina AC Junior/img19.jpg'
import Img20_pasta17 from '../../files/images/Oficina AC Junior/img20.jpg'
import Img21_pasta17 from '../../files/images/Oficina AC Junior/img21.jpg'
import Img22_pasta17 from '../../files/images/Oficina AC Junior/img22.jpg'
import Img23_pasta17 from '../../files/images/Oficina AC Junior/img23.jpg'
import Img24_pasta17 from '../../files/images/Oficina AC Junior/img24.jpg'
import Img25_pasta17 from '../../files/images/Oficina AC Junior/img25.jpg'
import Img26_pasta17 from '../../files/images/Oficina AC Junior/img26.jpg'
import Img27_pasta17 from '../../files/images/Oficina AC Junior/img27.jpg'
import Img28_pasta17 from '../../files/images/Oficina AC Junior/img28.jpg'
import Img29_pasta17 from '../../files/images/Oficina AC Junior/img29.jpg'
import Img30_pasta17 from '../../files/images/Oficina AC Junior/img30.jpg'
import Img31_pasta17 from '../../files/images/Oficina AC Junior/img31.jpg'
import Img32_pasta17 from '../../files/images/Oficina AC Junior/img32.jpg'
import Img33_pasta17 from '../../files/images/Oficina AC Junior/img33.jpg'
import Img34_pasta17 from '../../files/images/Oficina AC Junior/img34.jpg'
import Img35_pasta17 from '../../files/images/Oficina AC Junior/img35.jpg'
import Img36_pasta17 from '../../files/images/Oficina AC Junior/img36.jpg'
import Img37_pasta17 from '../../files/images/Oficina AC Junior/img37.jpg'
import Img38_pasta17 from '../../files/images/Oficina AC Junior/img38.jpg'
import Img39_pasta17 from '../../files/images/Oficina AC Junior/img39.jpg'
import Img40_pasta17 from '../../files/images/Oficina AC Junior/img40.jpg'
import Img41_pasta17 from '../../files/images/Oficina AC Junior/img41.jpg'
import Img42_pasta17 from '../../files/images/Oficina AC Junior/img42.jpg'
import Img43_pasta17 from '../../files/images/Oficina AC Junior/img43.jpg'
import Img44_pasta17 from '../../files/images/Oficina AC Junior/img44.jpg'
import Img45_pasta17 from '../../files/images/Oficina AC Junior/img45.jpg'
import Img46_pasta17 from '../../files/images/Oficina AC Junior/img46.jpg'
import Img47_pasta17 from '../../files/images/Oficina AC Junior/img47.jpg'
import Img48_pasta17 from '../../files/images/Oficina AC Junior/img48.jpg'
import Img49_pasta17 from '../../files/images/Oficina AC Junior/img49.jpg'
import Img50_pasta17 from '../../files/images/Oficina AC Junior/img50.jpg'
import Img51_pasta17 from '../../files/images/Oficina AC Junior/img51.jpg'
import Img52_pasta17 from '../../files/images/Oficina AC Junior/img52.jpg'
import Img53_pasta17 from '../../files/images/Oficina AC Junior/img53.jpg'
import Img54_pasta17 from '../../files/images/Oficina AC Junior/img54.jpg'
import Img55_pasta17 from '../../files/images/Oficina AC Junior/img55.jpg'
import Img56_pasta17 from '../../files/images/Oficina AC Junior/img56.jpg'
import Img57_pasta17 from '../../files/images/Oficina AC Junior/img57.jpg'
import Img58_pasta17 from '../../files/images/Oficina AC Junior/img58.jpg'
import Img59_pasta17 from '../../files/images/Oficina AC Junior/img59.jpg'
import Img60_pasta17 from '../../files/images/Oficina AC Junior/img60.jpg'
import Img61_pasta17 from '../../files/images/Oficina AC Junior/img61.jpg'
import Img62_pasta17 from '../../files/images/Oficina AC Junior/img62.jpg'
import Img63_pasta17 from '../../files/images/Oficina AC Junior/img63.jpg'
import Img64_pasta17 from '../../files/images/Oficina AC Junior/img64.jpg'
import Img65_pasta17 from '../../files/images/Oficina AC Junior/img65.jpg'
import Img66_pasta17 from '../../files/images/Oficina AC Junior/img66.jpg'
import Img67_pasta17 from '../../files/images/Oficina AC Junior/img67.jpg'
import Img68_pasta17 from '../../files/images/Oficina AC Junior/img68.jpg'
import Img69_pasta17 from '../../files/images/Oficina AC Junior/img69.jpg'
import Img70_pasta17 from '../../files/images/Oficina AC Junior/img70.jpg'
import Img71_pasta17 from '../../files/images/Oficina AC Junior/img71.jpg'
import Img72_pasta17 from '../../files/images/Oficina AC Junior/img72.jpg'
import Img73_pasta17 from '../../files/images/Oficina AC Junior/img73.jpg'
import Img74_pasta17 from '../../files/images/Oficina AC Junior/img74.jpg'
import Img75_pasta17 from '../../files/images/Oficina AC Junior/img75.jpg'
import Img76_pasta17 from '../../files/images/Oficina AC Junior/img76.jpg'
import Img77_pasta17 from '../../files/images/Oficina AC Junior/img77.jpg'
import Img78_pasta17 from '../../files/images/Oficina AC Junior/img78.jpg'
import Img79_pasta17 from '../../files/images/Oficina AC Junior/img79.jpg'
import Img80_pasta17 from '../../files/images/Oficina AC Junior/img80.jpg'
import Img81_pasta17 from '../../files/images/Oficina AC Junior/img81.jpg'
import Img82_pasta17 from '../../files/images/Oficina AC Junior/img82.jpg'
import Img83_pasta17 from '../../files/images/Oficina AC Junior/img83.jpg'
import Img84_pasta17 from '../../files/images/Oficina AC Junior/img84.jpg'
import Img85_pasta17 from '../../files/images/Oficina AC Junior/img85.jpg'
import Img86_pasta17 from '../../files/images/Oficina AC Junior/img86.jpg'
import Img87_pasta17 from '../../files/images/Oficina AC Junior/img87.jpg'
import Img88_pasta17 from '../../files/images/Oficina AC Junior/img88.jpg'
import Img89_pasta17 from '../../files/images/Oficina AC Junior/img89.jpg'
import Img90_pasta17 from '../../files/images/Oficina AC Junior/img90.jpg'
import Img91_pasta17 from '../../files/images/Oficina AC Junior/img91.jpg'
import Img92_pasta17 from '../../files/images/Oficina AC Junior/img92.jpg'
import Img93_pasta17 from '../../files/images/Oficina AC Junior/img93.jpg'
import Img94_pasta17 from '../../files/images/Oficina AC Junior/img94.jpg'
import Img95_pasta17 from '../../files/images/Oficina AC Junior/img95.jpg'
import Img96_pasta17 from '../../files/images/Oficina AC Junior/img96.jpg'
import Img97_pasta17 from '../../files/images/Oficina AC Junior/img97.jpg'
import Img98_pasta17 from '../../files/images/Oficina AC Junior/img98.jpg'
import Img99_pasta17 from '../../files/images/Oficina AC Junior/img99.jpg'
import Img100_pasta17 from '../../files/images/Oficina AC Junior/img100.jpg'
import Img101_pasta17 from '../../files/images/Oficina AC Junior/img101.jpg'
import Img102_pasta17 from '../../files/images/Oficina AC Junior/img102.jpg'
import Img103_pasta17 from '../../files/images/Oficina AC Junior/img103.jpg'
import Img104_pasta17 from '../../files/images/Oficina AC Junior/img104.jpg'
import Img105_pasta17 from '../../files/images/Oficina AC Junior/img105.jpg'
import Img106_pasta17 from '../../files/images/Oficina AC Junior/img106.jpg'
import Img107_pasta17 from '../../files/images/Oficina AC Junior/img107.jpg'
import Img108_pasta17 from '../../files/images/Oficina AC Junior/img108.jpg'
import Img109_pasta17 from '../../files/images/Oficina AC Junior/img109.jpg'
import Img110_pasta17 from '../../files/images/Oficina AC Junior/img110.jpg'
import Img111_pasta17 from '../../files/images/Oficina AC Junior/img111.jpg'
import Img112_pasta17 from '../../files/images/Oficina AC Junior/img112.jpg'
import Img113_pasta17 from '../../files/images/Oficina AC Junior/img113.jpg'
import Img114_pasta17 from '../../files/images/Oficina AC Junior/img114.jpg'

import Img1_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img1.jpg'
import Img2_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img2.jpg'
import Img3_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img3.jpg'
import Img4_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img4.jpg'
import Img5_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img5.jpg'
import Img6_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img6.jpg'
import Img7_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img7.jpg'
import Img8_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img8.jpg'
import Img9_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img9.jpg'
import Img10_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img10.jpg'
import Img11_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img11.jpg'
import Img12_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img12.jpg'
import Img13_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img13.jpg'
import Img14_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img14.jpg'
import Img15_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img15.jpg'
import Img16_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img16.jpg'
import Img17_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img17.jpg'
import Img18_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img18.jpg'
import Img19_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img19.jpg'
import Img20_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img20.jpg'
import Img21_pasta18 from '../../files/images/Exposição Espaço Nordeste 2013/img21.jpg'

import Img1_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img1.jpg'
import Img2_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img2.jpg'
import Img3_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img3.jpg'
import Img4_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img4.jpg'
import Img5_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img5.jpg'
import Img6_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img6.jpg'
import Img7_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img7.jpg'
import Img8_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img8.jpg'
import Img9_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img9.jpg'
import Img10_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img10.jpg'
import Img11_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img11.jpg'
import Img12_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img12.jpg'
import Img13_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img13.jpg'
import Img14_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img14.jpg'
import Img15_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img15.jpg'
import Img16_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img16.jpg'
import Img17_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img17.jpg'
import Img18_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img18.jpg'
import Img19_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img19.jpg'
import Img20_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img20.jpg'
import Img21_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img21.jpg'
import Img22_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img22.jpg'
import Img23_pasta19 from '../../files/images/Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior/img23.jpg'

import Img1_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img1.jpg'
import Img2_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img2.jpg'
import Img3_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img3.jpg'
import Img4_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img4.jpg'
import Img5_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img5.jpg'
import Img6_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img6.jpg'
import Img7_pasta20 from '../../files/images/Exibição do filme _A Cruz da Negra_ - Boa Vista/img7.jpg'

import Img1_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img1.jpg'
import Img2_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img2.jpg'
import Img3_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img3.jpg'
import Img4_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img4.jpg'
import Img5_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img5.jpg'
import Img6_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img6.jpg'
import Img7_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img7.jpg'
import Img8_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img8.jpg'
import Img9_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img9.jpg'
import Img10_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img10.jpg'
import Img11_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img11.jpg'
import Img12_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img12.jpg'
import Img13_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img13.jpg'
import Img14_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img14.jpg'
import Img15_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img15.jpg'
import Img16_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img16.jpg'
import Img17_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img17.jpg'
import Img18_pasta21 from '../../files/images/Encerramento da Primavera do Museu - Jardim do Seridó 2013/img18.jpg'

import Img1_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img1.jpg'
import Img2_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img2.jpg'
import Img3_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img3.jpg'
import Img4_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img4.jpg'
import Img5_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img5.jpg'
import Img6_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img6.jpg'
import Img7_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img7.jpg'
import Img8_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img8.jpg'
import Img9_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img9.jpg'
import Img10_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img10.jpg'
import Img11_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img11.jpg'
import Img12_pasta22 from '../../files/images/Documentário A cruz da negra - Jardim do Seridó/img12.jpg'

import Img1_pasta23 from '../../files/images/Currais Novos/img1.jpg'
import Img2_pasta23 from '../../files/images/Currais Novos/img2.jpg'
import Img3_pasta23 from '../../files/images/Currais Novos/img3.jpg'
import Img4_pasta23 from '../../files/images/Currais Novos/img4.jpg'
import Img5_pasta23 from '../../files/images/Currais Novos/img5.jpg'
import Img6_pasta23 from '../../files/images/Currais Novos/img6.jpg'
import Img7_pasta23 from '../../files/images/Currais Novos/img7.jpg'

import Img1_pasta24 from '../../files/images/Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais)/img1.jpeg'
import Img2_pasta24 from '../../files/images/Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais)/img2.jpeg'
import Img3_pasta24 from '../../files/images/Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais)/img3.jpeg'
import Img4_pasta24 from '../../files/images/Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais)/img4.jpeg'
import Img5_pasta24 from '../../files/images/Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais)/img5.jpeg'
import Img6_pasta24 from '../../files/images/Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais)/img6.jpeg'

import Img1_pasta25 from '../../files/images/CAICÓ/img1.JPG'
import Img2_pasta25 from '../../files/images/CAICÓ/img2.jpg'
import Img3_pasta25 from '../../files/images/CAICÓ/img3.jpg'
import Img4_pasta25 from '../../files/images/CAICÓ/img4.jpg'

import Img1_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img1.jpg'
import Img2_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img2.jpg'
import Img3_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img3.jpg'
import Img4_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img4.jpg'
import Img5_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img5.jpg'
import Img6_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img6.jpg'
import Img7_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img7.jpg'
import Img8_pasta26 from '../../files/images/Apresentação na feira - Currais Novos - 31 de outubro 2012/img8.jpg'

import Img1_pasta27 from '../../files/images/AcRosário/img1.jpg'
import Img2_pasta27 from '../../files/images/AcRosário/img2.jpg'
import Img3_pasta27 from '../../files/images/AcRosário/img3.jpg'
import Img4_pasta27 from '../../files/images/AcRosário/img4.jpg'
import Img5_pasta27 from '../../files/images/AcRosário/img5.jpg'
import Img6_pasta27 from '../../files/images/AcRosário/img6.jpg'
import Img7_pasta27 from '../../files/images/AcRosário/img7.jpg'

import Img1_pasta28 from '../../files/images/Acari 2/img1.jpg'
import Img2_pasta28 from '../../files/images/Acari 2/img2.jpg'
import Img3_pasta28 from '../../files/images/Acari 2/img3.jpg'
import Img4_pasta28 from '../../files/images/Acari 2/img4.jpg'
import Img5_pasta28 from '../../files/images/Acari 2/img5.jpg'
import Img6_pasta28 from '../../files/images/Acari 2/img6.jpg'
import Img7_pasta28 from '../../files/images/Acari 2/img7.jpg'
import Img8_pasta28 from '../../files/images/Acari 2/img8.jpg'
import Img9_pasta28 from '../../files/images/Acari 2/img9.jpg'
import Img10_pasta28 from '../../files/images/Acari 2/img10.jpg'
import Img11_pasta28 from '../../files/images/Acari 2/img11.jpg'
import Img12_pasta28 from '../../files/images/Acari 2/img12.jpg'
import Img13_pasta28 from '../../files/images/Acari 2/img13.jpg'
import Img14_pasta28 from '../../files/images/Acari 2/img14.jpg'

import Img1_pasta29 from '../../files/images/Ac FOTOSOFICINAS/img1.jpg'
import Img2_pasta29 from '../../files/images/Ac FOTOSOFICINAS/img2.jpg'
import Img3_pasta29 from '../../files/images/Ac FOTOSOFICINAS/img3.jpg'
import Img4_pasta29 from '../../files/images/Ac FOTOSOFICINAS/img4.jpg'
import Img5_pasta29 from '../../files/images/Ac FOTOSOFICINAS/img5.jpg'
import Img6_pasta29 from '../../files/images/Ac FOTOSOFICINAS/img6.jpg'

import Img1_pasta30 from '../../files/images/29 de abril 2013/img1.jpg'
import Img2_pasta30 from '../../files/images/29 de abril 2013/img2.jpg'
import Img3_pasta30 from '../../files/images/29 de abril 2013/img3.jpg'
import Img4_pasta30 from '../../files/images/29 de abril 2013/img4.jpg'
import Img5_pasta30 from '../../files/images/29 de abril 2013/img5.jpg'
import Img6_pasta30 from '../../files/images/29 de abril 2013/img6.jpg'
import Img7_pasta30 from '../../files/images/29 de abril 2013/img7.jpg'

import Img1_pasta31 from '../../files/images/24 de Julho de 2012/img1.jpg'
import Img2_pasta31 from '../../files/images/24 de Julho de 2012/img2.jpg'
import Img3_pasta31 from '../../files/images/24 de Julho de 2012/img3.jpg'
import Img4_pasta31 from '../../files/images/24 de Julho de 2012/img4.jpg'
import Img5_pasta31 from '../../files/images/24 de Julho de 2012/img5.jpg'
import Img6_pasta31 from '../../files/images/24 de Julho de 2012/img6.jpg'
import Img7_pasta31 from '../../files/images/24 de Julho de 2012/img7.jpg'
import Img8_pasta31 from '../../files/images/24 de Julho de 2012/img8.jpg'
import Img9_pasta31 from '../../files/images/24 de Julho de 2012/img9.jpg'
import Img10_pasta31 from '../../files/images/24 de Julho de 2012/img10.jpg'
import Img11_pasta31 from '../../files/images/24 de Julho de 2012/img11.jpg'
import Img12_pasta31 from '../../files/images/24 de Julho de 2012/img12.jpg'
import Img13_pasta31 from '../../files/images/24 de Julho de 2012/img13.jpg'
import Img14_pasta31 from '../../files/images/24 de Julho de 2012/img14.jpg'
import Img15_pasta31 from '../../files/images/24 de Julho de 2012/img15.jpg'
import Img16_pasta31 from '../../files/images/24 de Julho de 2012/img16.jpg'
import Img17_pasta31 from '../../files/images/24 de Julho de 2012/img17.jpg'
import Img18_pasta31 from '../../files/images/24 de Julho de 2012/img18.jpg'
import Img19_pasta31 from '../../files/images/24 de Julho de 2012/img19.jpg'
import Img20_pasta31 from '../../files/images/24 de Julho de 2012/img20.jpg'
import Img21_pasta31 from '../../files/images/24 de Julho de 2012/img21.jpg'
import Img22_pasta31 from '../../files/images/24 de Julho de 2012/img22.jpg'
import Img23_pasta31 from '../../files/images/24 de Julho de 2012/img23.jpg'

import Img1_pasta32 from '../../files/images/20 de setembro 2012/img1.jpg'
import Img2_pasta32 from '../../files/images/20 de setembro 2012/img2.jpg'
import Img3_pasta32 from '../../files/images/20 de setembro 2012/img3.jpg'
import Img4_pasta32 from '../../files/images/20 de setembro 2012/img4.jpg'
import Img5_pasta32 from '../../files/images/20 de setembro 2012/img5.jpg'
import Img6_pasta32 from '../../files/images/20 de setembro 2012/img6.jpg'
import Img7_pasta32 from '../../files/images/20 de setembro 2012/img7.jpg'
import Img8_pasta32 from '../../files/images/20 de setembro 2012/img8.jpg'
import Img9_pasta32 from '../../files/images/20 de setembro 2012/img9.jpg'
import Img10_pasta32 from '../../files/images/20 de setembro 2012/img10.jpg'
import Img11_pasta32 from '../../files/images/20 de setembro 2012/img11.jpg'
import Img12_pasta32 from '../../files/images/20 de setembro 2012/img12.jpg'
import Img13_pasta32 from '../../files/images/20 de setembro 2012/img13.jpg'
import Img14_pasta32 from '../../files/images/20 de setembro 2012/img14.jpg'
import Img15_pasta32 from '../../files/images/20 de setembro 2012/img15.jpg'
import Img16_pasta32 from '../../files/images/20 de setembro 2012/img16.jpg'
import Img17_pasta32 from '../../files/images/20 de setembro 2012/img17.jpg'
import Img18_pasta32 from '../../files/images/20 de setembro 2012/img18.jpg'
import Img19_pasta32 from '../../files/images/20 de setembro 2012/img19.jpg'
import Img20_pasta32 from '../../files/images/20 de setembro 2012/img20.jpg'
import Img21_pasta32 from '../../files/images/20 de setembro 2012/img21.jpg'
import Img22_pasta32 from '../../files/images/20 de setembro 2012/img22.jpg'
import Img23_pasta32 from '../../files/images/20 de setembro 2012/img23.jpg'
import Img24_pasta32 from '../../files/images/20 de setembro 2012/img24.jpg'
import Img25_pasta32 from '../../files/images/20 de setembro 2012/img25.jpg'
import Img26_pasta32 from '../../files/images/20 de setembro 2012/img26.jpg'
import Img27_pasta32 from '../../files/images/20 de setembro 2012/img27.jpg'
import Img28_pasta32 from '../../files/images/20 de setembro 2012/img28.jpg'

import Img1_pasta33 from '../../files/images/11 de Março de 2012/img1.jpg'
import Img2_pasta33 from '../../files/images/11 de Março de 2012/img2.jpg'
import Img3_pasta33 from '../../files/images/11 de Março de 2012/img3.jpg'
import Img4_pasta33 from '../../files/images/11 de Março de 2012/img4.jpg'
import Img5_pasta33 from '../../files/images/11 de Março de 2012/img5.jpg'
import Img6_pasta33 from '../../files/images/11 de Março de 2012/img6.jpg'
import Img7_pasta33 from '../../files/images/11 de Março de 2012/img7.jpg'
import Img8_pasta33 from '../../files/images/11 de Março de 2012/img8.jpg'
import Img9_pasta33 from '../../files/images/11 de Março de 2012/img9.jpg'
import Img10_pasta33 from '../../files/images/11 de Março de 2012/img10.jpg'
import Img11_pasta33 from '../../files/images/11 de Março de 2012/img11.jpg'
import Img12_pasta33 from '../../files/images/11 de Março de 2012/img12.jpg'
import Img13_pasta33 from '../../files/images/11 de Março de 2012/img13.jpg'
import Img14_pasta33 from '../../files/images/11 de Março de 2012/img14.jpg'
import Img15_pasta33 from '../../files/images/11 de Março de 2012/img15.jpg'
import Img16_pasta33 from '../../files/images/11 de Março de 2012/img16.jpg'
import Img17_pasta33 from '../../files/images/11 de Março de 2012/img17.jpg'
import Img18_pasta33 from '../../files/images/11 de Março de 2012/img18.jpg'
import Img19_pasta33 from '../../files/images/11 de Março de 2012/img19.jpg'
import Img20_pasta33 from '../../files/images/11 de Março de 2012/img20.jpg'
import Img21_pasta33 from '../../files/images/11 de Março de 2012/img21.jpg'
import Img22_pasta33 from '../../files/images/11 de Março de 2012/img22.jpg'
import Img23_pasta33 from '../../files/images/11 de Março de 2012/img23.jpg'
import Img24_pasta33 from '../../files/images/11 de Março de 2012/img24.jpg'
import Img25_pasta33 from '../../files/images/11 de Março de 2012/img25.jpg'
import Img26_pasta33 from '../../files/images/11 de Março de 2012/img26.jpg'
import Img27_pasta33 from '../../files/images/11 de Março de 2012/img27.jpg'
import Img28_pasta33 from '../../files/images/11 de Março de 2012/img28.jpg'
import Img29_pasta33 from '../../files/images/11 de Março de 2012/img29.jpg'
import Img30_pasta33 from '../../files/images/11 de Março de 2012/img30.jpg'
import Img31_pasta33 from '../../files/images/11 de Março de 2012/img31.jpg'
import Img32_pasta33 from '../../files/images/11 de Março de 2012/img32.jpg'
import Img33_pasta33 from '../../files/images/11 de Março de 2012/img33.jpg'
import Img34_pasta33 from '../../files/images/11 de Março de 2012/img34.jpg'
import Img35_pasta33 from '../../files/images/11 de Março de 2012/img35.jpg'
import Img36_pasta33 from '../../files/images/11 de Março de 2012/img36.jpg'
import Img37_pasta33 from '../../files/images/11 de Março de 2012/img37.jpg'
import Img38_pasta33 from '../../files/images/11 de Março de 2012/img38.jpg'
import Img39_pasta33 from '../../files/images/11 de Março de 2012/img39.jpg'
import Img40_pasta33 from '../../files/images/11 de Março de 2012/img40.jpg'
import Img41_pasta33 from '../../files/images/11 de Março de 2012/img41.jpg'
import Img42_pasta33 from '../../files/images/11 de Março de 2012/img42.jpg'
import Img43_pasta33 from '../../files/images/11 de Março de 2012/img43.jpg'
import Img44_pasta33 from '../../files/images/11 de Março de 2012/img44.jpg'
import Img45_pasta33 from '../../files/images/11 de Março de 2012/img45.jpg'
import Img46_pasta33 from '../../files/images/11 de Março de 2012/img46.jpg'
import Img47_pasta33 from '../../files/images/11 de Março de 2012/img47.jpg'
import Img48_pasta33 from '../../files/images/11 de Março de 2012/img48.jpg'
import Img49_pasta33 from '../../files/images/11 de Março de 2012/img49.jpg'
import Img50_pasta33 from '../../files/images/11 de Março de 2012/img50.jpg'
import Img51_pasta33 from '../../files/images/11 de Março de 2012/img51.jpg'
import Img52_pasta33 from '../../files/images/11 de Março de 2012/img52.jpg'
import Img53_pasta33 from '../../files/images/11 de Março de 2012/img53.jpg'
import Img54_pasta33 from '../../files/images/11 de Março de 2012/img54.jpg'
import Img55_pasta33 from '../../files/images/11 de Março de 2012/img55.jpg'

import Img1_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img1.jpg'
import Img2_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img2.jpg'
import Img3_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img3.jpg'
import Img4_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img4.jpg'
import Img5_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img5.jpg'
import Img6_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img6.jpg'
import Img7_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img7.jpg'
import Img8_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img8.jpg'
import Img9_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img9.jpg'
import Img10_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img10.jpg'
import Img11_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img11.jpg'
import Img12_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img12.jpg'
import Img13_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img13.jpg'
import Img14_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img14.jpg'
import Img15_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img15.jpg'
import Img16_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img16.jpg'
import Img17_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img17.jpg'
import Img18_pasta34 from '../../files/images/7ª Primavera dos Museus - Jardim do Seridó/img18.jpg'

export default function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: Img1_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 2,
      imgSrc: Img2_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 3,
      imgSrc: Img3_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 4,
      imgSrc: Img4_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 5,
      imgSrc: Img5_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 6,
      imgSrc: Img6_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 7,
      imgSrc: Img7_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 8,
      imgSrc: Img8_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 9,
      imgSrc: Img9_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 10,
      imgSrc: Img10_pasta01,
      description:
        'Seminário de encerramento do curso Educação para as Relações Etnico-Raciais.'
    },
    {
      id: 11,
      imgSrc: Img1_pasta02,
      description: 'Seminário Conexões - IBRAM.'
    },
    {
      id: 12,
      imgSrc: Img2_pasta02,
      description: 'Seminário Conexões - IBRAM.'
    },
    {
      id: 13,
      imgSrc: Img3_pasta02,
      description: 'Seminário Conexões - IBRAM.'
    },
    {
      id: 14,
      imgSrc: Img4_pasta02,
      description: 'Seminário Conexões - IBRAM.'
    },
    {
      id: 15,
      imgSrc: Img5_pasta02,
      description: 'Seminário Conexões - IBRAM.'
    },
    {
      id: 16,
      imgSrc: Img6_pasta02,
      description: 'Seminário Conexões - IBRAM.'
    },
    {
      id: 17,
      imgSrc: Img1_pasta03,
      description: 'Sagi - Alix Macadré  2017.'
    },
    {
      id: 18,
      imgSrc: Img2_pasta03,
      description: 'Sagi - Alix Macadré  2017.'
    },
    {
      id: 19,
      imgSrc: Img3_pasta03,
      description: 'Sagi - Alix Macadré  2017.'
    },
    {
      id: 20,
      imgSrc: Img4_pasta03,
      description: 'Sagi - Alix Macadré  2017.'
    },
    {
      id: 21,
      imgSrc: Img1_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 22,
      imgSrc: Img2_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 23,
      imgSrc: Img3_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 24,
      imgSrc: Img4_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 25,
      imgSrc: Img5_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 26,
      imgSrc: Img6_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 27,
      imgSrc: Img7_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 28,
      imgSrc: Img8_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 29,
      imgSrc: Img9_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 30,
      imgSrc: Img10_pasta04,
      description: 'Retratos da Boa Vista (oficinas de Ac Jr 2012 e 2013).'
    },
    {
      id: 31,
      imgSrc: Img1_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 32,
      imgSrc: Img2_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 33,
      imgSrc: Img3_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 34,
      imgSrc: Img4_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 35,
      imgSrc: Img5_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 36,
      imgSrc: Img6_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 37,
      imgSrc: Img7_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 38,
      imgSrc: Img8_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 39,
      imgSrc: Img9_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 40,
      imgSrc: Img10_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 41,
      imgSrc: Img11_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 42,
      imgSrc: Img12_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 43,
      imgSrc: Img13_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 44,
      imgSrc: Img14_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 45,
      imgSrc: Img15_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 46,
      imgSrc: Img16_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 47,
      imgSrc: Img17_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 48,
      imgSrc: Img18_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 49,
      imgSrc: Img19_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 50,
      imgSrc: Img20_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 51,
      imgSrc: Img21_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 52,
      imgSrc: Img22_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 53,
      imgSrc: Img23_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 54,
      imgSrc: Img24_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 55,
      imgSrc: Img25_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 56,
      imgSrc: Img26_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 57,
      imgSrc: Img27_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 58,
      imgSrc: Img28_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 59,
      imgSrc: Img29_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 60,
      imgSrc: Img30_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 61,
      imgSrc: Img31_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 62,
      imgSrc: Img32_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 63,
      imgSrc: Img33_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 64,
      imgSrc: Img34_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 65,
      imgSrc: Img35_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 66,
      imgSrc: Img36_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 67,
      imgSrc: Img37_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 68,
      imgSrc: Img38_pasta05,
      description:
        'Oficina Irmandades do Rosário do Seridó - 26 de Agosto 2012.'
    },
    {
      id: 69,
      imgSrc: Img1_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 70,
      imgSrc: Img2_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 71,
      imgSrc: Img3_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 72,
      imgSrc: Img4_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 73,
      imgSrc: Img5_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 74,
      imgSrc: Img6_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 75,
      imgSrc: Img7_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 76,
      imgSrc: Img8_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 77,
      imgSrc: Img9_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 78,
      imgSrc: Img10_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 79,
      imgSrc: Img11_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 80,
      imgSrc: Img12_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 81,
      imgSrc: Img13_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 82,
      imgSrc: Img14_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 83,
      imgSrc: Img15_pasta06,
      description: 'Oficina Estudo de Movimentos Afro com Prof. Monica.'
    },
    {
      id: 84,
      imgSrc: Img1_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 85,
      imgSrc: Img2_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 86,
      imgSrc: Img3_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 87,
      imgSrc: Img4_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 88,
      imgSrc: Img5_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 89,
      imgSrc: Img6_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 90,
      imgSrc: Img7_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 91,
      imgSrc: Img8_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 92,
      imgSrc: Img9_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 93,
      imgSrc: Img10_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 94,
      imgSrc: Img11_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 95,
      imgSrc: Img12_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 96,
      imgSrc: Img13_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 97,
      imgSrc: Img14_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 98,
      imgSrc: Img15_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 99,
      imgSrc: Img16_pasta07,
      description: 'Oficina de Cabelos Afro - Professora Manuella.'
    },
    {
      id: 100,
      imgSrc: Img1_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 101,
      imgSrc: Img2_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 102,
      imgSrc: Img3_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 103,
      imgSrc: Img4_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 104,
      imgSrc: Img5_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 105,
      imgSrc: Img6_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 106,
      imgSrc: Img7_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 107,
      imgSrc: Img8_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 108,
      imgSrc: Img9_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 109,
      imgSrc: Img10_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 110,
      imgSrc: Img11_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 111,
      imgSrc: Img12_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 112,
      imgSrc: Img13_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 113,
      imgSrc: Img14_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 114,
      imgSrc: Img15_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 115,
      imgSrc: Img16_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 116,
      imgSrc: Img17_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 117,
      imgSrc: Img18_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 118,
      imgSrc: Img19_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 119,
      imgSrc: Img20_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 120,
      imgSrc: Img21_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 121,
      imgSrc: Img22_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 122,
      imgSrc: Img23_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 123,
      imgSrc: Img24_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 124,
      imgSrc: Img25_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 125,
      imgSrc: Img26_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 126,
      imgSrc: Img27_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 127,
      imgSrc: Img28_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 128,
      imgSrc: Img29_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 129,
      imgSrc: Img30_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 130,
      imgSrc: Img31_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 131,
      imgSrc: Img32_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 132,
      imgSrc: Img33_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 133,
      imgSrc: Img34_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 134,
      imgSrc: Img35_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 135,
      imgSrc: Img36_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 136,
      imgSrc: Img37_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 137,
      imgSrc: Img38_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 138,
      imgSrc: Img39_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 139,
      imgSrc: Img40_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 140,
      imgSrc: Img41_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 141,
      imgSrc: Img42_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 142,
      imgSrc: Img43_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 143,
      imgSrc: Img44_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 144,
      imgSrc: Img45_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 145,
      imgSrc: Img46_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 146,
      imgSrc: Img47_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 147,
      imgSrc: Img48_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 148,
      imgSrc: Img49_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 149,
      imgSrc: Img50_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 150,
      imgSrc: Img51_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 151,
      imgSrc: Img52_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 152,
      imgSrc: Img53_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 153,
      imgSrc: Img54_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 154,
      imgSrc: Img55_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 155,
      imgSrc: Img56_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 156,
      imgSrc: Img57_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 157,
      imgSrc: Img58_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 158,
      imgSrc: Img59_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 159,
      imgSrc: Img60_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 160,
      imgSrc: Img61_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 161,
      imgSrc: Img62_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 162,
      imgSrc: Img63_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 163,
      imgSrc: Img64_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 164,
      imgSrc: Img65_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 165,
      imgSrc: Img66_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 166,
      imgSrc: Img67_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 167,
      imgSrc: Img68_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 168,
      imgSrc: Img69_pasta08,
      description:
        'Oficina de Arqueologia - 18 a 20-05 Boa Vista e Maracujá -Seridó.'
    },
    {
      id: 169,
      imgSrc: Img1_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 170,
      imgSrc: Img2_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 171,
      imgSrc: Img3_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 172,
      imgSrc: Img4_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 173,
      imgSrc: Img5_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 174,
      imgSrc: Img6_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 175,
      imgSrc: Img7_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 176,
      imgSrc: Img8_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 177,
      imgSrc: Img9_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 178,
      imgSrc: Img10_pasta09,
      description: 'Oficina audiovisual com Cécili Chagnaud (Parelhas).'
    },
    {
      id: 179,
      imgSrc: Img1_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 180,
      imgSrc: Img2_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 181,
      imgSrc: Img3_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 182,
      imgSrc: Img4_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 183,
      imgSrc: Img5_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 184,
      imgSrc: Img6_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 185,
      imgSrc: Img7_pasta10,
      description: 'Oficina AC Jr 2013.'
    },
    {
      id: 186,
      imgSrc: Img1_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 187,
      imgSrc: Img2_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 188,
      imgSrc: Img3_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 189,
      imgSrc: Img4_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 190,
      imgSrc: Img5_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 191,
      imgSrc: Img6_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 192,
      imgSrc: Img7_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 193,
      imgSrc: Img8_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 194,
      imgSrc: Img9_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 195,
      imgSrc: Img10_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 196,
      imgSrc: Img11_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 197,
      imgSrc: Img12_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 198,
      imgSrc: Img13_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 199,
      imgSrc: Img14_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 200,
      imgSrc: Img15_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 201,
      imgSrc: Img16_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 202,
      imgSrc: Img17_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 203,
      imgSrc: Img18_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 204,
      imgSrc: Img19_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 205,
      imgSrc: Img20_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 206,
      imgSrc: Img21_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 207,
      imgSrc: Img22_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 208,
      imgSrc: Img23_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 209,
      imgSrc: Img24_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 210,
      imgSrc: Img25_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 211,
      imgSrc: Img26_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 212,
      imgSrc: Img27_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 213,
      imgSrc: Img28_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 214,
      imgSrc: Img29_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 215,
      imgSrc: Img30_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 216,
      imgSrc: Img31_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 217,
      imgSrc: Img32_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 218,
      imgSrc: Img33_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 219,
      imgSrc: Img34_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 220,
      imgSrc: Img35_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 221,
      imgSrc: Img36_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 222,
      imgSrc: Img37_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 223,
      imgSrc: Img38_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 224,
      imgSrc: Img39_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 225,
      imgSrc: Img40_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 226,
      imgSrc: Img41_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 227,
      imgSrc: Img42_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 228,
      imgSrc: Img43_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 229,
      imgSrc: Img44_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 230,
      imgSrc: Img45_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 231,
      imgSrc: Img46_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 232,
      imgSrc: Img47_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 233,
      imgSrc: Img48_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 234,
      imgSrc: Img49_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 235,
      imgSrc: Img50_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 236,
      imgSrc: Img51_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 237,
      imgSrc: Img52_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 238,
      imgSrc: Img53_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 239,
      imgSrc: Img54_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 240,
      imgSrc: Img55_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 241,
      imgSrc: Img56_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 242,
      imgSrc: Img57_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 243,
      imgSrc: Img58_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 244,
      imgSrc: Img59_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 245,
      imgSrc: Img60_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 246,
      imgSrc: Img61_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 247,
      imgSrc: Img62_pasta11,
      description: 'I SEMANA DA CONSCIENCIA NEGRA DE BOA VISTA DOS NEGROS.'
    },
    {
      id: 248,
      imgSrc: Img1_pasta12,
      description: 'Fotos no livro.'
    },
    {
      id: 249,
      imgSrc: Img2_pasta12,
      description: 'Fotos no livro.'
    },
    {
      id: 250,
      imgSrc: Img1_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 251,
      imgSrc: Img2_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 252,
      imgSrc: Img3_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 253,
      imgSrc: Img4_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 254,
      imgSrc: Img5_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 255,
      imgSrc: Img6_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 256,
      imgSrc: Img7_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 257,
      imgSrc: Img8_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 258,
      imgSrc: Img9_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 259,
      imgSrc: Img10_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 260,
      imgSrc: Img11_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 261,
      imgSrc: Img12_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 262,
      imgSrc: Img13_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 263,
      imgSrc: Img14_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 264,
      imgSrc: Img15_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 265,
      imgSrc: Img16_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 266,
      imgSrc: Img17_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 267,
      imgSrc: Img18_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 268,
      imgSrc: Img19_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 269,
      imgSrc: Img20_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 270,
      imgSrc: Img21_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 271,
      imgSrc: Img22_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 272,
      imgSrc: Img23_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 273,
      imgSrc: Img24_pasta13,
      description: 'Fotos do Albúm de D. Viturina.'
    },
    {
      id: 274,
      imgSrc: Img1_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 275,
      imgSrc: Img2_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 276,
      imgSrc: Img3_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 277,
      imgSrc: Img4_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 278,
      imgSrc: Img5_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 279,
      imgSrc: Img6_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 280,
      imgSrc: Img7_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 281,
      imgSrc: Img8_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 282,
      imgSrc: Img9_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 283,
      imgSrc: Img10_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 284,
      imgSrc: Img11_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 285,
      imgSrc: Img12_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 286,
      imgSrc: Img13_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 287,
      imgSrc: Img14_pasta14,
      description: 'Fotos Antigas.'
    },
    {
      id: 288,
      imgSrc: Img1_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 289,
      imgSrc: Img2_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 290,
      imgSrc: Img3_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 291,
      imgSrc: Img4_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 292,
      imgSrc: Img5_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 293,
      imgSrc: Img6_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 294,
      imgSrc: Img7_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 295,
      imgSrc: Img8_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 296,
      imgSrc: Img9_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 297,
      imgSrc: Img10_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 298,
      imgSrc: Img11_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 299,
      imgSrc: Img12_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 300,
      imgSrc: Img13_pasta15,
      description: 'Fotos Ac.'
    },
    {
      id: 301,
      imgSrc: Img1_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 302,
      imgSrc: Img2_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 303,
      imgSrc: Img3_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 304,
      imgSrc: Img4_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 305,
      imgSrc: Img5_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 306,
      imgSrc: Img6_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 307,
      imgSrc: Img7_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 308,
      imgSrc: Img8_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 309,
      imgSrc: Img9_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 310,
      imgSrc: Img10_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 311,
      imgSrc: Img11_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 312,
      imgSrc: Img12_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 313,
      imgSrc: Img13_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 314,
      imgSrc: Img14_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 315,
      imgSrc: Img15_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 316,
      imgSrc: Img16_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 317,
      imgSrc: Img17_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 318,
      imgSrc: Img18_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 319,
      imgSrc: Img19_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 320,
      imgSrc: Img20_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 321,
      imgSrc: Img21_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 322,
      imgSrc: Img22_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 323,
      imgSrc: Img23_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 324,
      imgSrc: Img24_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 325,
      imgSrc: Img25_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 326,
      imgSrc: Img26_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 327,
      imgSrc: Img27_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 328,
      imgSrc: Img28_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 329,
      imgSrc: Img29_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 330,
      imgSrc: Img30_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 331,
      imgSrc: Img31_pasta16,
      description: 'Fotos Ac Jr.'
    },
    {
      id: 332,
      imgSrc: Img1_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 333,
      imgSrc: Img2_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 334,
      imgSrc: Img3_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 335,
      imgSrc: Img4_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 336,
      imgSrc: Img5_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 337,
      imgSrc: Img6_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 338,
      imgSrc: Img7_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 339,
      imgSrc: Img8_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 340,
      imgSrc: Img9_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 341,
      imgSrc: Img10_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 342,
      imgSrc: Img11_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 343,
      imgSrc: Img12_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 344,
      imgSrc: Img13_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 345,
      imgSrc: Img14_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 346,
      imgSrc: Img15_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 347,
      imgSrc: Img16_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 348,
      imgSrc: Img17_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 349,
      imgSrc: Img18_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 350,
      imgSrc: Img19_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 351,
      imgSrc: Img20_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 352,
      imgSrc: Img21_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 353,
      imgSrc: Img22_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 354,
      imgSrc: Img23_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 355,
      imgSrc: Img24_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 356,
      imgSrc: Img25_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 357,
      imgSrc: Img26_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 358,
      imgSrc: Img27_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 359,
      imgSrc: Img28_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 360,
      imgSrc: Img29_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 361,
      imgSrc: Img30_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 362,
      imgSrc: Img31_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 363,
      imgSrc: Img32_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 364,
      imgSrc: Img33_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 365,
      imgSrc: Img34_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 366,
      imgSrc: Img35_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 367,
      imgSrc: Img36_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 368,
      imgSrc: Img37_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 369,
      imgSrc: Img38_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 370,
      imgSrc: Img39_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 371,
      imgSrc: Img40_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 372,
      imgSrc: Img41_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 373,
      imgSrc: Img42_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 374,
      imgSrc: Img43_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 375,
      imgSrc: Img44_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 376,
      imgSrc: Img45_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 377,
      imgSrc: Img46_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 378,
      imgSrc: Img47_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 379,
      imgSrc: Img48_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 380,
      imgSrc: Img49_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 381,
      imgSrc: Img50_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 382,
      imgSrc: Img51_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 383,
      imgSrc: Img52_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 384,
      imgSrc: Img53_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 385,
      imgSrc: Img54_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 386,
      imgSrc: Img55_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 387,
      imgSrc: Img56_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 388,
      imgSrc: Img57_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 389,
      imgSrc: Img58_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 390,
      imgSrc: Img59_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 391,
      imgSrc: Img60_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 392,
      imgSrc: Img61_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 393,
      imgSrc: Img62_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 394,
      imgSrc: Img63_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 395,
      imgSrc: Img64_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 396,
      imgSrc: Img65_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 397,
      imgSrc: Img66_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 398,
      imgSrc: Img67_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 399,
      imgSrc: Img68_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 400,
      imgSrc: Img69_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 401,
      imgSrc: Img70_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 402,
      imgSrc: Img71_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 403,
      imgSrc: Img72_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 404,
      imgSrc: Img73_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 405,
      imgSrc: Img74_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 406,
      imgSrc: Img75_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 407,
      imgSrc: Img76_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 408,
      imgSrc: Img77_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 409,
      imgSrc: Img78_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 410,
      imgSrc: Img79_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 411,
      imgSrc: Img80_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 412,
      imgSrc: Img81_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 413,
      imgSrc: Img82_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 414,
      imgSrc: Img83_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 415,
      imgSrc: Img84_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 416,
      imgSrc: Img85_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 417,
      imgSrc: Img86_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 418,
      imgSrc: Img87_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 419,
      imgSrc: Img88_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 420,
      imgSrc: Img89_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 421,
      imgSrc: Img90_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 422,
      imgSrc: Img91_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 423,
      imgSrc: Img92_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 424,
      imgSrc: Img93_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 425,
      imgSrc: Img94_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 426,
      imgSrc: Img95_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 427,
      imgSrc: Img96_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 428,
      imgSrc: Img97_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 429,
      imgSrc: Img98_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 430,
      imgSrc: Img99_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 431,
      imgSrc: Img100_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 432,
      imgSrc: Img101_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 433,
      imgSrc: Img102_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 434,
      imgSrc: Img103_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 435,
      imgSrc: Img104_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 436,
      imgSrc: Img105_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 437,
      imgSrc: Img106_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 438,
      imgSrc: Img107_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 439,
      imgSrc: Img108_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 440,
      imgSrc: Img109_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 441,
      imgSrc: Img110_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 442,
      imgSrc: Img111_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 443,
      imgSrc: Img112_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 444,
      imgSrc: Img113_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 445,
      imgSrc: Img114_pasta17,
      description: 'Oficina AC Junior.'
    },
    {
      id: 446,
      imgSrc: Img1_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 447,
      imgSrc: Img2_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 448,
      imgSrc: Img3_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 449,
      imgSrc: Img4_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 450,
      imgSrc: Img5_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 451,
      imgSrc: Img6_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 452,
      imgSrc: Img7_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 453,
      imgSrc: Img8_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 454,
      imgSrc: Img9_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 455,
      imgSrc: Img10_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 456,
      imgSrc: Img11_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 457,
      imgSrc: Img12_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 458,
      imgSrc: Img13_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 459,
      imgSrc: Img14_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 460,
      imgSrc: Img15_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 461,
      imgSrc: Img16_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 462,
      imgSrc: Img17_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 463,
      imgSrc: Img18_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 464,
      imgSrc: Img19_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 465,
      imgSrc: Img20_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 466,
      imgSrc: Img21_pasta18,
      description: 'Exposição Espaço Nordeste 2013.'
    },
    {
      id: 467,
      imgSrc: Img1_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 468,
      imgSrc: Img2_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 469,
      imgSrc: Img3_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 470,
      imgSrc: Img4_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 471,
      imgSrc: Img5_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 472,
      imgSrc: Img6_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 473,
      imgSrc: Img7_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 474,
      imgSrc: Img8_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 475,
      imgSrc: Img9_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 476,
      imgSrc: Img10_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 477,
      imgSrc: Img11_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 478,
      imgSrc: Img12_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 479,
      imgSrc: Img13_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 480,
      imgSrc: Img14_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 481,
      imgSrc: Img15_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 482,
      imgSrc: Img16_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 483,
      imgSrc: Img17_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 484,
      imgSrc: Img18_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 485,
      imgSrc: Img19_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 486,
      imgSrc: Img20_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 487,
      imgSrc: Img21_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 488,
      imgSrc: Img22_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 489,
      imgSrc: Img23_pasta19,
      description:
        'Fotografando Fronteiras- Primeiro dia de curso de fotografia com AC Junior.'
    },
    {
      id: 490,
      imgSrc: Img1_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 491,
      imgSrc: Img2_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 492,
      imgSrc: Img3_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 493,
      imgSrc: Img4_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 494,
      imgSrc: Img5_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 495,
      imgSrc: Img6_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 496,
      imgSrc: Img7_pasta20,
      description: 'Exibição do filme _A Cruz da Negra_ - Boa Vista.'
    },
    {
      id: 497,
      imgSrc: Img1_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 498,
      imgSrc: Img2_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 499,
      imgSrc: Img3_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 500,
      imgSrc: Img4_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 501,
      imgSrc: Img5_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 502,
      imgSrc: Img6_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 503,
      imgSrc: Img7_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 504,
      imgSrc: Img8_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 505,
      imgSrc: Img9_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 506,
      imgSrc: Img10_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 507,
      imgSrc: Img11_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 508,
      imgSrc: Img12_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 509,
      imgSrc: Img13_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 510,
      imgSrc: Img14_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 511,
      imgSrc: Img15_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 512,
      imgSrc: Img16_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 513,
      imgSrc: Img17_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 514,
      imgSrc: Img18_pasta21,
      description: 'Encerramento da Primavera do Museu - Jardim do Seridó 2013.'
    },
    {
      id: 515,
      imgSrc: Img1_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 516,
      imgSrc: Img2_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 517,
      imgSrc: Img3_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 518,
      imgSrc: Img4_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 519,
      imgSrc: Img5_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 520,
      imgSrc: Img6_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 521,
      imgSrc: Img7_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 522,
      imgSrc: Img8_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 523,
      imgSrc: Img9_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 524,
      imgSrc: Img10_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 525,
      imgSrc: Img11_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 526,
      imgSrc: Img12_pasta22,
      description: 'Documentário A cruz da negra - Jardim do Seridó.'
    },
    {
      id: 527,
      imgSrc: Img1_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 528,
      imgSrc: Img2_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 529,
      imgSrc: Img3_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 530,
      imgSrc: Img4_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 531,
      imgSrc: Img5_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 532,
      imgSrc: Img6_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 533,
      imgSrc: Img7_pasta23,
      description: 'Currais Novos.'
    },
    {
      id: 534,
      imgSrc: Img1_pasta24,
      description:
        'Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais).'
    },
    {
      id: 535,
      imgSrc: Img2_pasta24,
      description:
        'Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais).'
    },
    {
      id: 536,
      imgSrc: Img3_pasta24,
      description:
        'Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais).'
    },
    {
      id: 537,
      imgSrc: Img4_pasta24,
      description:
        'Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais).'
    },
    {
      id: 538,
      imgSrc: Img5_pasta24,
      description:
        'Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais).'
    },
    {
      id: 539,
      imgSrc: Img6_pasta24,
      description:
        'Ceará Mirim - Coqueiros e Engenho Vale Verde (visita com alunos de graduação em ciências sociais).'
    },
    {
      id: 540,
      imgSrc: Img1_pasta25,
      description: 'Caicó.'
    },
    {
      id: 541,
      imgSrc: Img2_pasta25,
      description: 'Caicó.'
    },
    {
      id: 542,
      imgSrc: Img3_pasta25,
      description: 'Caicó.'
    },
    {
      id: 543,
      imgSrc: Img4_pasta25,
      description: 'Caicó.'
    },
    {
      id: 544,
      imgSrc: Img1_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 545,
      imgSrc: Img2_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 546,
      imgSrc: Img3_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 547,
      imgSrc: Img4_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 548,
      imgSrc: Img5_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 549,
      imgSrc: Img6_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 550,
      imgSrc: Img7_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 551,
      imgSrc: Img8_pasta26,
      description: 'Apresentação na feira - Currais Novos - 31 de outubro 2012.'
    },
    {
      id: 552,
      imgSrc: Img1_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 553,
      imgSrc: Img2_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 554,
      imgSrc: Img3_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 555,
      imgSrc: Img4_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 556,
      imgSrc: Img5_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 557,
      imgSrc: Img6_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 558,
      imgSrc: Img7_pasta27,
      description: 'Ac Rosário.'
    },
    {
      id: 559,
      imgSrc: Img1_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 560,
      imgSrc: Img2_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 561,
      imgSrc: Img3_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 562,
      imgSrc: Img4_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 563,
      imgSrc: Img5_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 564,
      imgSrc: Img6_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 565,
      imgSrc: Img7_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 566,
      imgSrc: Img8_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 567,
      imgSrc: Img9_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 568,
      imgSrc: Img10_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 569,
      imgSrc: Img11_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 570,
      imgSrc: Img12_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 571,
      imgSrc: Img13_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 572,
      imgSrc: Img14_pasta28,
      description: 'Acari 2.'
    },
    {
      id: 573,
      imgSrc: Img1_pasta29,
      description: 'AC Fotos Oficinas.'
    },
    {
      id: 574,
      imgSrc: Img2_pasta29,
      description: 'AC Fotos Oficinas.'
    },
    {
      id: 575,
      imgSrc: Img3_pasta29,
      description: 'AC Fotos Oficinas.'
    },
    {
      id: 576,
      imgSrc: Img4_pasta29,
      description: 'AC Fotos Oficinas.'
    },
    {
      id: 577,
      imgSrc: Img5_pasta29,
      description: 'AC Fotos Oficinas.'
    },
    {
      id: 578,
      imgSrc: Img6_pasta29,
      description: 'AC Fotos Oficinas.'
    },
    {
      id: 579,
      imgSrc: Img1_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 580,
      imgSrc: Img2_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 581,
      imgSrc: Img3_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 582,
      imgSrc: Img4_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 583,
      imgSrc: Img5_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 584,
      imgSrc: Img6_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 585,
      imgSrc: Img7_pasta30,
      description: '29 de abril 2013.'
    },
    {
      id: 586,
      imgSrc: Img1_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 587,
      imgSrc: Img2_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 588,
      imgSrc: Img3_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 589,
      imgSrc: Img4_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 590,
      imgSrc: Img5_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 591,
      imgSrc: Img6_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 592,
      imgSrc: Img7_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 593,
      imgSrc: Img8_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 594,
      imgSrc: Img9_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 595,
      imgSrc: Img10_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 596,
      imgSrc: Img11_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 597,
      imgSrc: Img12_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 598,
      imgSrc: Img13_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 599,
      imgSrc: Img14_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 600,
      imgSrc: Img15_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 601,
      imgSrc: Img16_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 602,
      imgSrc: Img17_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 603,
      imgSrc: Img18_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 604,
      imgSrc: Img19_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 605,
      imgSrc: Img20_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 606,
      imgSrc: Img21_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 607,
      imgSrc: Img22_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 608,
      imgSrc: Img23_pasta31,
      description: '24 de Julho de 2012.'
    },
    {
      id: 609,
      imgSrc: Img1_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 610,
      imgSrc: Img2_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 611,
      imgSrc: Img3_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 612,
      imgSrc: Img4_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 613,
      imgSrc: Img5_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 614,
      imgSrc: Img6_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 615,
      imgSrc: Img7_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 616,
      imgSrc: Img8_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 617,
      imgSrc: Img9_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 618,
      imgSrc: Img10_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 619,
      imgSrc: Img11_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 620,
      imgSrc: Img12_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 621,
      imgSrc: Img13_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 622,
      imgSrc: Img14_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 623,
      imgSrc: Img15_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 624,
      imgSrc: Img16_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 625,
      imgSrc: Img17_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 626,
      imgSrc: Img18_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 627,
      imgSrc: Img19_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 628,
      imgSrc: Img20_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 629,
      imgSrc: Img21_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 630,
      imgSrc: Img22_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 631,
      imgSrc: Img23_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 632,
      imgSrc: Img24_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 633,
      imgSrc: Img25_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 634,
      imgSrc: Img26_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 635,
      imgSrc: Img27_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 636,
      imgSrc: Img28_pasta32,
      description: '20 de setembro 2012.'
    },
    {
      id: 637,
      imgSrc: Img1_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 638,
      imgSrc: Img2_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 639,
      imgSrc: Img3_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 640,
      imgSrc: Img4_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 641,
      imgSrc: Img5_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 642,
      imgSrc: Img6_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 643,
      imgSrc: Img7_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 644,
      imgSrc: Img8_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 645,
      imgSrc: Img9_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 646,
      imgSrc: Img10_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 647,
      imgSrc: Img11_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 648,
      imgSrc: Img12_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 649,
      imgSrc: Img13_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 650,
      imgSrc: Img14_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 651,
      imgSrc: Img15_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 652,
      imgSrc: Img16_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 653,
      imgSrc: Img17_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 654,
      imgSrc: Img18_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 655,
      imgSrc: Img19_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 656,
      imgSrc: Img20_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 657,
      imgSrc: Img21_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 658,
      imgSrc: Img22_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 659,
      imgSrc: Img23_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 660,
      imgSrc: Img24_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 661,
      imgSrc: Img25_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 662,
      imgSrc: Img26_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 663,
      imgSrc: Img27_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 664,
      imgSrc: Img28_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 665,
      imgSrc: Img29_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 666,
      imgSrc: Img30_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 667,
      imgSrc: Img31_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 668,
      imgSrc: Img32_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 669,
      imgSrc: Img33_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 670,
      imgSrc: Img34_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 671,
      imgSrc: Img35_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 672,
      imgSrc: Img36_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 673,
      imgSrc: Img37_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 674,
      imgSrc: Img38_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 675,
      imgSrc: Img39_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 676,
      imgSrc: Img40_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 677,
      imgSrc: Img41_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 678,
      imgSrc: Img42_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 679,
      imgSrc: Img43_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 680,
      imgSrc: Img44_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 681,
      imgSrc: Img45_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 682,
      imgSrc: Img46_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 683,
      imgSrc: Img47_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 684,
      imgSrc: Img48_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 685,
      imgSrc: Img49_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 686,
      imgSrc: Img50_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 687,
      imgSrc: Img51_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 688,
      imgSrc: Img52_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 689,
      imgSrc: Img53_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 690,
      imgSrc: Img54_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 691,
      imgSrc: Img55_pasta33,
      description: '11 de Março de 2012.'
    },
    {
      id: 692,
      imgSrc: Img1_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 693,
      imgSrc: Img2_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 694,
      imgSrc: Img3_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 695,
      imgSrc: Img4_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 696,
      imgSrc: Img5_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 697,
      imgSrc: Img6_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 698,
      imgSrc: Img7_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 699,
      imgSrc: Img8_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 700,
      imgSrc: Img9_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 701,
      imgSrc: Img10_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 702,
      imgSrc: Img11_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 703,
      imgSrc: Img12_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 704,
      imgSrc: Img13_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 705,
      imgSrc: Img14_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 706,
      imgSrc: Img15_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 707,
      imgSrc: Img16_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 708,
      imgSrc: Img17_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    },
    {
      id: 709,
      imgSrc: Img18_pasta34,
      description: '7ª Primavera dos Museus - Jardim do Seridó.'
    }
  ]

  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const [description, setDescription] = useState('')

  const getImg = item => {
    setTempImgSrc(item.imgSrc)
    setDescription(item.description)
    setModel(true)
  }

  return (
    <>
      <Navbar />
      <div className={model ? 'model open' : 'model'}>
        <div className="contentModel">
          <img src={tempImgSrc} />
          <p align="justify">{description}</p>
        </div>
        <AiFillCloseCircle onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="photos" key={index} onClick={() => getImg(item)}>
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>
          )
        })}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
