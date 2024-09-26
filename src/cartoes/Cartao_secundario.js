import React from "react";

export default function Cartao_secundario(props) {
  return (
    <div onClick={props.mostrarTabela} className="alturaPadrao">
      <div className="cartaoProdutos">
        <div className="tamanhoPadrao">
          <img
            className="imagemProdutos"
            alt={props.subTitulo}
            src={props.imagem}
          />
          <div className="distancia">
            <div className="patenteContainer">
              <img
                className="patente"
                src={props.patente}
                alt={props.patente}
              ></img>
            </div>
            <div className="descricaoProdutos">
              <h1 className="linha">{props.titulo}</h1>
              <h2 className="nomeProdutos">{props.subTitulo}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
