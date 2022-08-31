import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from "../../components/Footer/footer";
import "./audios.css";

export default function Audio() {
  return (
    <>
      <Navbar/>

      <h1>Áudios</h1>
      <div className='content'>
        <div className='videos-list'>
          <ul id="list">
            <li><iframe width="560" height="232" src="https://open.spotify.com/embed/episode/41nNS4uljrP7327D4XpwVi?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="232" src="https://open.spotify.com/embed/episode/58AHApJAfBTrvNYjqZUHHb?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="232" src="https://open.spotify.com/embed/episode/5lRMYzeamkj4o8VcVw4Kkp?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="232" src="https://open.spotify.com/embed/episode/0q3CmacIbkRKs0WRjt4knG?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="232" src="https://open.spotify.com/embed/episode/56d5mWhW0GWZ4HrKOOBUcZ?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
            <li><iframe width="560" height="232" src="https://open.spotify.com/embed/episode/67Yp40YBTp2poopKf1zZKR?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
          </ul>
        </div>
      </div>
      
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}