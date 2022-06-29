import React from "react";
import "./footer.css";
export default function footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="contato">
          <h2>Contato</h2>
          <ul>
            <li>
              <img src="/assets/img/email-logo.png" className="email"></img>
              contato@museutronco.cchla.ufrn.br
            </li>
            <li>
              <img src="/assets/img/phone-logo.png" className="phone"></img>
              (84) 3342-2240
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src="/assets/img/green_logo.png" alt="Logo verde do museu Tronco, Ramos e Raízes." />
        </div>
      </div>
    </footer>
  )
}