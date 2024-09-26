import React from "react";
import "../componentes/primeira-pagina/ProdutosVerde.css";

export default function Ver_produtos(props) {
  return (
    <button onClick={props.cliqueProdutos} className="animated-button">
      <span className="text">VER PRODUTOS</span>
      <span className="circle"></span>
    </button>
  );
}
