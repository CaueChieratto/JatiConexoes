import React from "react";
import Aviso from "../botoes/Aviso";

export default function Icons() {
  return (
    <div className="icon-container">
      <div className="icon">
        <div className="icons">
          <a href="https://www.instagram.com/jati.conexoes" target="_blank">
            <i id="insta" className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            href="https://web.facebook.com/people/Jati-Conex%C3%B5es/100080293780490/?mibextid=ZbWKwL"
          >
            <i id="face" className="fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5519997227281&text&type=phone_number&app_absent=0"
          >
            <i id="zap" className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="aviso">
          <Aviso></Aviso>
        </div>
      </div>
    </div>
  );
}
