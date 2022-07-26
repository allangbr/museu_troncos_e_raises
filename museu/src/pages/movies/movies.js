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
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/C3zZuVLCHag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
          </ul>
        </div>
      </div>
      
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}