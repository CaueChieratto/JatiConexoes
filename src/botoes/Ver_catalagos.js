import React from "react";
import "../componentes/primeira-pagina/CatalagosBranco.css";

export default function Ver_catalagos(props) {
  return (
    <a
      href={props.linkCatalagos}
      target="_blank"
      className="animated-button-white"
    >
      <span className="text-green">VER CATÁLOGO</span>
      <span className="circle1"></span>
    </a>
  );
}
