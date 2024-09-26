import React from "react";

export default function Cabeçalho(props) {
  return (
    <div className="cabeçalho">
      <img className="inicio" src={props.imagem} />
      <div>
        <div className="barra-topo">JATI CONEXÕES - {props.subtitulo}</div>
      </div>
    </div>
  );
}
