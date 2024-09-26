import React from "react";
import "../componentes/primeira-pagina/CartaoPrincipalSecundario.css";

export default function Cartao_primario_rodape(props) {
  return (
    <div className="background-foot">
      <div className="info-foot">
        <a className="descricao" target="_blank" href={props.link}>
          <img
            className="produtos-imagem"
            src={props.imagem}
            alt={props.titulo}
          />
          <span className="nome-secundario">{props.titulo}</span>
        </a>
      </div>
    </div>
  );
}
