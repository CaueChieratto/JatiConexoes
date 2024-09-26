import React from "react";
import "../componentes/primeira-pagina/BalaoContato.css";

export default function Balao_do_whatsapp() {
  return (
    <div className="container-preso">
      <a
        className="balao"
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=5519997227281&text&type=phone_number&app_absent=0"
      >
        <div className="imagem-presa">
          <img
            className="imagem-moça"
            src="/imagens-pagina-inicio/moça.png"
            alt="Fale Conosco"
          />
        </div>
        <div className="botao">
          <div className="frase-balao">FALE COM A GENTE</div>
        </div>
      </a>
    </div>
  );
}
