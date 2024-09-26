import React from "react";
import "../componentes/primeira-pagina/CartaoPrincipal.css";
import Ver_produtos from "../botoes/Ver_produtos";
import Ver_catalagos from "../botoes/Ver_catalagos";

export default function Cartao_primario(props) {
  return (
    <div>
      <div className="background">
        <div className="info">
          <h1 className="nome-linha">{props.titulo}</h1>
          <span>
            <div onClick={props.cliqueProdutos}>
              <img
                className="produtos"
                src={props.imagem}
                alt={`Imagem ${props.titulo}`}
              />
            </div>
          </span>
          <div className="botoes">
            <Ver_produtos cliqueProdutos={props.cliqueProdutos}></Ver_produtos>
            <Ver_catalagos linkCatalagos={props.linkCatalagos}></Ver_catalagos>
          </div>
        </div>
      </div>
    </div>
  );
}
