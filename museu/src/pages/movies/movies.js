import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from "../../components/Footer/footer";
import "./movies.css";
export default function Movie() {
  return (
    <>
      <Navbar/>

      <h1>Filmes</h1>
      <div className='content'>
        <div className='videos-list'>
          <ul id="list">
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/XmUjb-vhX_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/v57WnnW2bAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/RUEosHBZ_uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/L-QUNti5o5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/Sy3V-bTG35I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/py4v44cJjw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/pURp0lE-cf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/mXYBI_84GiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/HG2SJDVyWzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/Vw8xZxjQMrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/oG_KXm-QlLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/vW5dFnxWv94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}